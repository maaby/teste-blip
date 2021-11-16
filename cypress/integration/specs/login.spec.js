/// <reference types="Cypress"/>

const LoginAction = require('../../pages/login');

describe('Login', () => {
  beforeEach(function () {
    cy.visit('/login');
  });

  it('Validar esqueceu sua senha', () => {
    LoginAction.UI.esqueceuSuaSenha();
    cy.get('.bp-fw-bold').contains('Esqueceu sua senha?')
  });

  it('Cadastrar sem informar campo Obrigatório', () => {
    LoginAction.UI.cadastrarUsuario();
    cy.get('#submitButton').should('be.disabled');
  });
});