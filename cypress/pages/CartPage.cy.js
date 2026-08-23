 class Cart {

  AddToCartSauceLabsBackpack = '[data-test="add-to-cart-sauce-labs-backpack"]';
  AddToCartSauceLabsBoltTshirt = '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]';
  AddToCartSauceLabsFleeceJacket = '[data-test="add-to-cart-sauce-labs-fleece-jacket"]';
  ShoppingCartLink = '[data-test="shopping-cart-link"]';
  SauceLabsBoltTshirt ='[data-test="inventory-item"]'
  LabsFleeceJacket = '[data-test="inventory-item-name"]';
  InventoryItemDescriptionPrice = '[data-test="inventory-item-price"]';
  RemoveSauceLabsBoltTShirt = '[data-test="remove-sauce-labs-bolt-t-shirt"]';
  RemoveSauceLabsFleeceJacket = '[data-test="remove-sauce-labs-fleece-jacket"]';
  ContinueShopping = '[data-test="continue-shopping"]';
  Cart() {

    cy.get(this.SauceLabsBoltTshirt)
      .should("contain", "Sauce Labs Bolt T-Shirt");
      cy.get(this.InventoryItemDescriptionPrice)
      .should('contain', '$15.99');
      cy.get(this.LabsFleeceJacket)
      .should('contain', 'Sauce Labs Fleece Jacket');
      cy.get(this.InventoryItemDescriptionPrice)
      .should('contain', '$49.99');
    cy.get(this.AddToCartSauceLabsBoltTshirt).click();
    cy.get(this.AddToCartSauceLabsFleeceJacket).click();
    cy.get(this.ShoppingCartLink).scrollIntoView();
    cy.get(this.ShoppingCartLink).click();
    cy.get(this.RemoveSauceLabsBoltTShirt).click();
    cy.get(this.RemoveSauceLabsFleeceJacket).click();
    cy.get(this.ContinueShopping).click();
  }
}
export default new Cart;