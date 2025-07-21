describe('API - Remover Produto', () => {
  let token = ''
  let idProduto = ''

  before(() => {
    cy.loginApi('gugamartins2025@gmail.com', 'guga123').then(tokenRecebido => {
      token = tokenRecebido

      const produto = {
        nome: `Produto remover ${Date.now()}`,
        preco: 200,
        descricao: 'Teste de remoção',
        quantidade: 1
      }

      return cy.criarProduto(token, produto).then(res => {
        idProduto = res.body._id
        cy.log(`Produto criado com id: ${idProduto}`)
      })
    })
  })
  it('Deve remover o produto com sucesso', () => {
    cy.deletarProduto(token, idProduto).then(res => {
      expect(res.status).to.eq(200)
      expect(res.body.message).to.eq('Registro excluído com sucesso')
    })
  })

  it('Não deve remover produto com id inválido', () => {
    cy.deletarProduto(token, 'idInvalido123').then(res => {
      expect(res.status).to.eq(400)
    })
  })
})