class LoginPage {

  usernameImput = '[data-test="username"]';
  passwordImput = '[data-test="password"]';
  loginButton = '[data-test="login-button"]';

  login(username, password) {

    cy.get(this.usernameImput).type(username);
    cy.get(this.passwordImput).type(password);
    cy.get(this.loginButton)
    .should("be.visible")
    .click();

  }
}

export default new LoginPage;