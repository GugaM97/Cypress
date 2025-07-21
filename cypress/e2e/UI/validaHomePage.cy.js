import { HomePage } from '../page/pageHome'

const homePage = new HomePage()

describe('Login - Serverest', () => {
  beforeEach(function () {
    cy.fixture('usuarios').then((data) => {
      this.dados = data
    })
  })

  it('Deve validar a página Home', function () {
     cy.login(this.dados.usuarioValido.email, this.dados.usuarioValido.senha)
    homePage.validarHomeCompleta()
  })
})