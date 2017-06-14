import { TwjExamenVegaFernandaPage } from './app.po';

describe('twj-examen-vega-fernanda App', () => {
  let page: TwjExamenVegaFernandaPage;

  beforeEach(() => {
    page = new TwjExamenVegaFernandaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
