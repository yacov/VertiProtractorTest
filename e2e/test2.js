var ContactDetailsPage = require('./../pages/contactDetailsPage.js')
var contactDetailsPage = new ContactDetailsPage();
describe('Set of negative tests on quickQuote page', function() {
    contactDetailsPage.openPage();
    contactDetailsPage.clickToQuoteButton();
  it('launch an errorMessage when \'Wer soll versichert werden?\' not filled', function() {
     console.log("Checking that \'Wer soll versichert werden?\' error message is correct");
    expect(contactDetailsPage.getUserErrorMessageText()).toContain("Bitte wählen Sie aus, wer versichert werden soll");
  });

  it('launch an errorMessage when \'BirthDate\' not filled', function() {
        console.log("Checking that \'Geburtsdatum\' error message is correct");
        expect(contactDetailsPage.getbirthDateErrorMessageText()).toContain("Bitte tragen Sie das Geburtsdatum der versicherten Person ein.");
    });

  it('launch an errorMessage when \'Smoker status\' radiobutton not checked', function() {
        console.log("Checking that \'Sind Sie Raucher?\' error message is correct");
        expect(contactDetailsPage.getsmokerStatusErrorMessageText()).toContain("Bitte geben Sie an, ob die versicherte Person Raucher ist.");
    });
});
