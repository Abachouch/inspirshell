import { InspirshellPage } from './app.po';

describe('inspirshell App', () => {
  let page: InspirshellPage;

  beforeEach(() => {
    page = new InspirshellPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
