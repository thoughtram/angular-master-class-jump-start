import { Component } from '@angular/core';
import { AppStore } from '../store/app-store';

@Component({
  selector: 'trm-voter',
  template: `
    <div fxLayout="column" fxLayoutAlign="space-between center" fxFlex style="padding-left:10px;">
      <button md-fab class="yes" mdTooltip="Vote Yes!">
        <md-icon class="md-24">thumb_up</md-icon>
      </button>

      <ng-content></ng-content>

      <button md-fab class="no" mdTooltip="Vote No!">
        <md-icon class="md-24">thumb_down</md-icon>
      </button>
    </div>
  `,
  styles : [
    `button.yes { background-color: darkgreen; }`,
    `button.no { background-color: red; }`
  ]
})
export class VoterComponent {

  /**
   * Inject the appstore
   */
  constructor(private store: AppStore) { }

  private increment() {
    // @Todo - dispatch action to the store
  }

  private decrement() {
    // @Todo - dispatch action to the store
  }
}

