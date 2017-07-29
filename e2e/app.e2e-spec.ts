import { AngularInActionPage } from './app.po';

describe('angular-in-action App', () => {
  let page: AngularInActionPage;

  beforeEach(() => {
    page = new AngularInActionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
