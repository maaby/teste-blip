/// <reference types="Cypress"/>

const LoginAction = require('../../pages/login');

describe('Login', () => {
  beforeEach(function () {
    cy.visit('/login');
  });

  it('Login com usuario inválido', () => {
    LoginAction.UI.login('teste@teste.com.br','123456');
    cy.get('.bottom-left > .hydrated').contains('Login e/ou senha inválidos');
  });

  it('Login com usuario sem ativar conta', () => {
    LoginAction.UI.login('maabymandira@gmail.coma','julia0410@');
    cy.get('.bottom-left > .hydrated').contains('Ops! Você ainda não ativou sua conta.');
  });
});