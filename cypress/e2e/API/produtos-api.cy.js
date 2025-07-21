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

      if (res.status === 201) {
        cy.log('Produto Cadastrado com sucesso!')
        expect(res.status).to.eq(201)
        expect(res.body.message).to.eq('Cadastro realizado com sucesso')
      } else {
        cy.log('O Produto não foi cadastrado!')
      }

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

      
        cy.criarProduto(token, produto).then(res2 => {


          if (res2.status === 400) {
            cy.log('Produto não pode ser cadastrado!')
            expect(res2.status).to.eq(400)
            expect(res2.body.message).to.eq('Já existe produto com esse nome')
          } else {
            cy.log('A API permitiu cadastrar o Produto - Não deveria!')
          }

        })
      })
    })
  })



})