describe('Testes Página de Login', () => {

  beforeEach(() => {
    cy.acessarLogin()
  })

  it('Deve logar com sucesso', () => {
    cy.fazerLogin('student', 'Password123')

    cy.validarMensagem('.post-title', 'Logged In Successfully')
    cy.validarMensagem('strong', 'Congratulations student. You successfully logged in!')

    cy.logout()
  })

  it('Nome de Usuário Incorreto', () => {
    cy.fazerLogin('usuarioIncorreto', 'Password123')

    cy.validarMensagem('#error', 'Your username is invalid!')
  })

  it('Senha Incorreta', () => {
    cy.fazerLogin('student', 'senhaIncorreta')

    cy.validarMensagem('#error', 'Your password is invalid!')
  })
})

// Visitar página de Login
Cypress.Commands.add('acessarLogin', () => {
  cy.visit('https://practicetestautomation.com/practice-test-login/')
})

// Preencher e submeter formulário de login
Cypress.Commands.add('fazerLogin', (usuario, senha) => {
  cy.get('#username').type(usuario)
  cy.get('#password').type(senha)
  cy.get('#submit').click()
})

// Validar mensagens de sucesso e erro
Cypress.Commands.add('validarMensagem', (seletor, mensagem) => {
  cy.get(seletor)
    .should('be.visible')
    .and('have.text', mensagem)
})

// Logout
Cypress.Commands.add('logout', () => {
  cy.get('.wp-block-button__link').click()
})
