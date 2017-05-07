import { EasyblogPage } from './app.po';

describe('easyblog App', () => {
  let page: EasyblogPage;

  beforeEach(() => {
    page = new EasyblogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
