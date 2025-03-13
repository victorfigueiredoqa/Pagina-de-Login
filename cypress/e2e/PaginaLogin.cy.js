//const { should } = require("chai")

describe('Testes Pagina de Login', () => {
  it('Deve logar com sucesso', () => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')

    cy.get('#username').type('student')
    cy.get('#password').type('Password123')
    cy.get('#submit').click()
    cy.get('.post-title')
      .should('be.visible').and('have.text', 'Logged In Successfully')
    cy.get('strong')
      .should('be.visible').and('have.text', 'Congratulations student. You successfully logged in!')
    cy.get('.wp-block-button__link').click()
  })

  it('Nome de Usuário Incorreto', () => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')

    cy.get('#username').type('usuarioIncorreto')
    cy.get('#password').type('Password123')
    cy.get('#submit').click()
    cy.get('#error')
      .should('be.visible').and('have.text', 'Your username is invalid!')
  })

  it('Senha Incorreta', () => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')

    cy.get('#username').type('student')
    cy.get('#password').type('senhaIncorreta')
    cy.get('#submit').click()
    cy.get('#error')
      .should('be.visible').and('have.text', 'Your password is invalid!')
  })
})
