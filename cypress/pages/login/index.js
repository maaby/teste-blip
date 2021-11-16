const pageElements = require('./elements').ELEMENTS;

class LoginUI {
  login(usuario, senha) {
    cy.get(pageElements.email).should('be.visible').click().type(usuario);
    cy.get(pageElements.senha).should('be.visible').click().type(senha);
    cy.get(pageElements.entrar).should('be.visible').click();
  }

  esqueceuSuaSenha() {
    cy.get(pageElements.esqSenha).should('be.visible').click();
  }

  cadastrarUsuario() {
    cy.get(pageElements.cadastro).should('be.visible').click();
    cy.get(pageElements.nomeCompleto).should('be.visible').click().type('teste');
    cy.get(pageElements.emailCadastro).should('be.visible').click().type('teste@teste.com.br');
    cy.get(pageElements.senhaCadastro).should('be.visible').click().type('123456778');
    cy.get(pageElements.siteEmpresa).should('be.visible').click().type('teste.com.br');
    cy.get(pageElements.termos).should('be.visible').click();
  }
}

module.exports = {
  UI: new LoginUI()
};