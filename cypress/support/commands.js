Cypress.Commands.add('login', (email, senha) => {
  cy.visit('https://front.serverest.dev/login')
  cy.get('input[data-testid="email"]').type(email)
  cy.get('input[data-testid="senha"]').type(senha)
  cy.get('button[data-testid="entrar"]').click()
})

Cypress.Commands.add('loginApi', (email, senha) => {
  return cy.request({
    method: 'POST',
    url: 'https://serverest.dev/login',
    body: {
      email,
      password: senha
    }
  }).then(response => {
    expect(response.status).to.eq(200)
    expect(response.body.authorization).to.exist
    return response.body.authorization // Retorna o token para uso
  })
})

Cypress.Commands.add('criarProduto', (token, produto) => {
  return cy.request({
    method: 'POST',
    url: 'https://serverest.dev/produtos',
    headers: {
      Authorization: `${token}`
    },
    body: produto,
    failOnStatusCode: false
  })
})

Cypress.Commands.add('deletarProduto', (token, idProduto) => {
  return cy.request({
    method: 'DELETE',
    url: `https://serverest.dev/produtos/${idProduto}`,
    headers: {  Authorization: `${token}` },
    failOnStatusCode: false
  })
})