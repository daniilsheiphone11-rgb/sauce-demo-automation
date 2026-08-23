class ProductPage {

  SauceLabsBackpackAdd = '[data-test="add-to-cart-sauce-labs-backpack"]';
  SauceLabsBikeLight = '[data-test="add-to-cart-sauce-labs-bike-light"]';
  ProductSort = '[data-test="product-sort-container"]';
  ShoppingCartOpen = '[data-test="shopping-cart-link"]';

  ProductPage() {

    cy.get(this.SauceLabsBackpackAdd)
  .should("be.visible")
    .click();
    cy.get(this.SauceLabsBikeLight).click();
    cy.get(this.ProductSort).scrollIntoView();
    cy.get('[data-test="product-sort-container"]')
  .select("lohi");;
    cy.get(this.ShoppingCartOpen).click();
  }
}

export default new ProductPage;
