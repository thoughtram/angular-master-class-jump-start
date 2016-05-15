import { Angular2MasterClassAppPage } from './app.po';

describe('angular2-master-class-app App', function() {
  let page: Angular2MasterClassAppPage;

  beforeEach(() => {
    page = new Angular2MasterClassAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
