import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/merge';
import 'rxjs/add/observable/of';

@Injectable()
export class EventBusService {
  private _messages$ = new Subject<EventBusArgs>();
  private _registry = new Map<string, EventWatcher>();

  emit<T>(eventType: string, data: T) {
    let watcher = this.getWatcher(eventType);
    watcher.lastValue = data;

    this._messages$.next({
      type: eventType,
      data: data
    });
  }

  observe<T>(eventType: string, replayLast = false): Observable<T> {
    let watcher = this.getWatcher(eventType);
    // if replayLast and a value has been emitted
    if (replayLast && typeof watcher.lastValue !== 'undefined') {
      return Observable.of(watcher.lastValue)
                       .merge(watcher.observable);
    }
    return watcher.observable;
  }

  private getWatcher(eventType: string): EventWatcher {
    if (this._registry.has(eventType)) {
      return this._registry.get(eventType);
    }

    let watcher = {
      observable: this._messages$
                      .filter(args => args.type === eventType)
                      .map(args => args.data)
    };
    this._registry.set(
      eventType,
      watcher
    );
    return watcher;
  }
}

interface EventBusArgs {
  type: string;
  data: any
}

interface EventWatcher {
  observable: Observable<any>;
  lastValue?: any;
}
