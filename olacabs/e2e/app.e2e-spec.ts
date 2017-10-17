import { OlacabsPage } from './app.po';

describe('olacabs App', () => {
  let page: OlacabsPage;

  beforeEach(() => {
    page = new OlacabsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
