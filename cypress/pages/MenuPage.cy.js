class MenuPage {

  BurgerButton = '[data-test="react-burger-menu-btn"]';
  LogoutButton = '[data-test="logout-sidebar-link"]';

  openMenu() {
    cy.get(this.BurgerButton)
      .should("be.visible")
      .click();
  }

  logout() {
    cy.get(this.LogoutButton)
      .should("be.visible")
      .click();
  }
}

export default new MenuPage();