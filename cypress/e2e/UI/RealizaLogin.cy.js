import { HomePage } from '../page/pageHome'

const homePage = new HomePage()

describe('Login - Serverest', () => {
  beforeEach(function () {
    cy.fixture('usuarios').then((data) => {
      this.dados = data
    })
  })

  it('Login com sucesso', function () {
    cy.login(this.dados.usuarioValido.email, this.dados.usuarioValido.senha)
    cy.url().should('include', '/home')
    cy.contains('Bem Vindo Fulano da Silva').should('be.visible')
  })

  it('Login com erro', function () {
    cy.login(this.dados.usuarioInvalido.email, this.dados.usuarioInvalido.senha)
    cy.contains('Email e/ou senha inválidos').should('be.visible')
  })

    it('Login com sucesso, E clicar no botão de Logout', function () {
    cy.login(this.dados.usuarioValido.email, this.dados.usuarioValido.senha)
    cy.url().should('include', '/home')
    cy.get('button[data-testid="logout"]').click()
    cy.get('h1[class="font-robot"]').contains('Login')
  })

})