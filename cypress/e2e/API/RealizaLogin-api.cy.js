describe('Login API - Serverest', () => {
  const baseUrl = 'https://serverest.dev'

it('Login sem comando customizado', () => {
  cy.request({
    method: 'POST',
    url: 'https://serverest.dev/login',
    body: {
      email: 'fulano@qa.com',
      password: 'teste'
    }
  }).then(res => {
    expect(res.status).to.eq(200)
    expect(res.body.authorization).to.exist
  })
})
  it('Deve retornar erro com credenciais inválidas', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}/login`,
      failOnStatusCode: false, 
      body: {
        email: 'errado@email.com',
        password: 'senhaerrada'
      }
    }).then((response) => {
      expect(response.status).to.eq(401)
      expect(response.body.message).to.eq('Email e/ou senha inválidos')
     
    })
  })
})