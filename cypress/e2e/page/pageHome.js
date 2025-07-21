export class HomePage {
  validarUrlHome() {
    cy.url().should('include', '/home')
  }

  validarMensagemBoasVindas() {
    cy.contains('Este é seu sistema para administrar seu ecommerce.').should('be.visible')
  }

  validarImagemVisivel() {
    cy.get('img[class="imagem"]').should('be.visible')
  }

  validarNavbarVisivel() {
    cy.get('ul[class="navbar-nav mr-auto mt-2 mt-lg-0"]').should('be.visible')
  }

  validarItensDoMenu() {
   
    cy.get('ul[class="navbar-nav mr-auto mt-2 mt-lg-0"]').find('a[data-testid="home"]').should('be.visible')
    cy.get('ul[class="navbar-nav mr-auto mt-2 mt-lg-0"]').find('a[data-testid="cadastrar-usuarios"]').should('be.visible')
    cy.get('ul[class="navbar-nav mr-auto mt-2 mt-lg-0"]').find('a[data-testid="listar-usuarios"]').should('be.visible')
    cy.get('ul[class="navbar-nav mr-auto mt-2 mt-lg-0"]').find('a[data-testid="cadastrar-produtos"]').should('be.visible')
    cy.get('ul[class="navbar-nav mr-auto mt-2 mt-lg-0"]').find('a[data-testid="listar-produtos"]').should('be.visible')
    cy.get('ul[class="navbar-nav mr-auto mt-2 mt-lg-0"]').find('a[data-testid="link-relatorios"]').should('be.visible')
  }

  validarHomeCompleta() {
    this.validarUrlHome()
    this.validarMensagemBoasVindas()
    this.validarImagemVisivel()
    this.validarNavbarVisivel()
    this.validarItensDoMenu()
  }
}

