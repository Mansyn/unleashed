import { UnleashedPage } from './app.po';

describe('unleashed App', () => {
  let page: UnleashedPage;

  beforeEach(() => {
    page = new UnleashedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
