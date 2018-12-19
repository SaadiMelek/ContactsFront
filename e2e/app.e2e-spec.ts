import { ContactsWebPage } from './app.po';

describe('contacts-web App', () => {
  let page: ContactsWebPage;

  beforeEach(() => {
    page = new ContactsWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
