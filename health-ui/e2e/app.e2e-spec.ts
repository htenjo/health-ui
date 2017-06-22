import { HealthUiPage } from './app.po';

describe('health-ui App', () => {
  let page: HealthUiPage;

  beforeEach(() => {
    page = new HealthUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
