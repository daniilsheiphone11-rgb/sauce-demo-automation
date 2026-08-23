class CheckoutPage {

  Checkout = '[data-test="checkout"]';
  FirstName = '[data-test="firstName"]';
  LastName = '[data-test="lastName"]';
  PostalCode = '[data-test="postalCode"]';
  Finish = '[data-test="finish"]';
  BackToProducts = '[data-test="back-to-products"]';
  Continue = '[data-test="continue"]';
  CompleteHeader = '[data-test="complete-header"]';

  CheckoutPage(firstName, lastName, postalCode) {

    cy.get(this.Checkout).click();
    cy.get(this.FirstName)
    .should("be.visible")
    .click();
    cy.get(this.FirstName).type(firstName);
    cy.get(this.LastName)
    .should("be.visible")
    .click();
    cy.get(this.LastName).type(lastName);
    cy.get(this.PostalCode).click();
    cy.get(this.PostalCode)
    .should("be.visible")
    .type(postalCode);
    cy.get(this.Continue).click();
    cy.get(this.Finish).scrollIntoView();
    cy.get(this.Finish).click();
    cy.get(this.CompleteHeader)
    .should('contain', 'Thank you for your order!')
    cy.get(this.BackToProducts).click();

  }
}

export default new CheckoutPage;
