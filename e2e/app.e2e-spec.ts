import { Ng2MultipleModulePage } from './app.po';

describe('ng2-multiple-module App', function() {
  let page: Ng2MultipleModulePage;

  beforeEach(() => {
    page = new Ng2MultipleModulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
