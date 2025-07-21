describe('API - Produtos', () => {
  let token = ''

  before(() => {
    cy.loginApi('fulano@qa.com', 'teste').then(auth => {
      token = auth
    })
  })

  it('Deve criar um novo produto com sucesso', () => {
    const produto = {
      nome: `Notebook QA ${Date.now()}`,
      preco: 4500,
      descricao: 'Notebook usado nos testes de automação',
      quantidade: 5
    }

    

    cy.criarProduto(token, produto).then(res => {
      expect(res.status).to.eq(201)
      expect(res.body.message).to.eq('Cadastro realizado com sucesso')
    })
  })

it('Não deve permitir criar produto com nome duplicado', () => {
  const produto = {
    nome: `ProdutoDuplicado${Date.now()}`,
    preco: 100,
    descricao: 'Teste duplicado',
    quantidade: 5
  }

  cy.loginApi('fulano@qa.com', 'teste').then(token => {
    cy.criarProduto(token, produto).then(res => {
      expect(res.status).to.eq(201)

      // Tenta criar produto duplicado e verifica erro
      cy.criarProduto(token, produto).then(res2 => {
        expect(res2.status).to.eq(400)
        expect(res2.body.message).to.eq('Já existe produto com esse nome')
      })
    })
  })
})



})