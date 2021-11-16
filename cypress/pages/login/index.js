const pageElements = require('./elements').ELEMENTS;

class LoginUI {
  login(usuario, senha) {
    cy.get(pageElements.email).should('be.visible').click().type(usuario);
    cy.get(pageElements.senha).should('be.visible').click().type(senha);
    cy.get(pageElements.entrar).should('be.visible').click();
  }
}

module.exports = {
  UI: new LoginUI()
};