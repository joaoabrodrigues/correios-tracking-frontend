import { RastreioCorreiosPage } from './app.po';

describe('rastreio-correios App', () => {
  let page: RastreioCorreiosPage;

  beforeEach(() => {
    page = new RastreioCorreiosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
