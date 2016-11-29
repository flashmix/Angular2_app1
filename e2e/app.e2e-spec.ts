import { Angular2AppV1Page } from './app.po';

describe('angular2-app-v1 App', function() {
  let page: Angular2AppV1Page;

  beforeEach(() => {
    page = new Angular2AppV1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
