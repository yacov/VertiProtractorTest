var ContactDetailsPage = function() {

var quoteButton = element(by.id("form:quickQuoteButton"));

var userErrorMessage = element(by.xpath(".//*[@id='form:j_idt102']/span[2]"));

var birthDateErrorMessage = element(by.xpath(".//*[@id='form:dateOfBirth_message']/span[2]"));

var smokerStatusErrorMessage = element(by.xpath(".//*[@id='form:j_idt163']/span[2]"));


this.openPage = function()  {
  //turn angular wait off, because this page do not use it
  browser.waitForAngularEnabled(false);
  console.log("Opening quick evaluation page");
  browser.get("https://www.verti.de/lebensversicherung/risikolebensversicherung/rechner/qq/quickquotedetails.doo");
};

this.clickToQuoteButton = function() {
  console.log("Clicking to Quick Quote Button");
quoteButton.click();
};

this.getUserErrorMessageText = function() {
    return userErrorMessage.getText();
};

    this.getbirthDateErrorMessageText = function() {
        return birthDateErrorMessage.getText();
    };

    this.getsmokerStatusErrorMessageText = function() {
        return smokerStatusErrorMessage.getText();
    };

};
module.exports = ContactDetailsPage
