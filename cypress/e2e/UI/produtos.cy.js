import { faker } from '@faker-js/faker';
const nomeProduto = faker.commerce.product()

describe('Cadastro de Produto via UI - Serverest', () => {

  
  it('Deve cadastrar um produto e validar na listagem', () => {
    cy.visit('https://front.serverest.dev/login')

    cy.get('input[data-testid="email"]').type('fulano@qa.com')
    cy.get('input[data-testid="senha"]').type('teste')
    cy.get('button[data-testid="entrar"]').click()

    cy.url().should('include', '/admin/home')

    cy.contains('Cadastrar Produtos').click()

    cy.get('input[data-testid="nome"]').type(nomeProduto)
    cy.get('input[data-testid="preco"]').type('123')
    cy.get('textarea[data-testid="descricao"]').type('Produto de teste automatizado')
    cy.get('[data-testid="quantity"]').type('10')

   cy.get('[data-testid="cadastarProdutos"]').click({force:true})

    cy.contains('Listar Produtos').click()
    cy.get('table').should('contain', nomeProduto)
  })

   it('Deve remover o produto cadastrado via API', () => {
   
    cy.request('GET', 'https://serverest.dev/produtos').then((response) => {
      const produtoEncontrado = response.body.produtos.find(p => p.nome === nomeProduto)

      expect(produtoEncontrado, 'Produto encontrado na API').to.exist

      const idProduto = produtoEncontrado._id

      cy.request('POST', 'https://serverest.dev/login', {
        email: 'fulano@qa.com',
        password: 'teste'
      }).then((loginResponse) => {
        const token = loginResponse.body.authorization

    
        cy.request({
          method: 'DELETE',
          url: `https://serverest.dev/produtos/${idProduto}`,
          headers: {
            Authorization: token
          }
        }).then((deleteResponse) => {
          expect(deleteResponse.status).to.eq(200)
          expect(deleteResponse.body.message).to.eq('Registro excluído com sucesso')
        })
      })
    })
  })
})
