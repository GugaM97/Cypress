# 🔥 Automação de testes com Cypress - Serverest

Projeto de automação UI e API usando Cypress no site [Serverest](https://front.serverest.dev/login)

## 🧪 Tecnologias
- Cypress
- JavaScript
- Faker
- Mocha
- Node Js

## ✅ Casos de Teste
- Login com sucesso
- Login inválido
- Cadastro de produto
- Exclusão de usuário
- Validação da página Home de alguns Elementos.

## 🧪 Explicação da estrutura e bibliotecas instaladas e boas práticas no projeto
- Na pasta Page: Coloquei um page object onde é possível organizar os códigos alocando cada caso de testes por functions dentro de classes
- Custom commands: Como o cypress tem esse recurso de comandos customizados, Podemos alocar todos os comandos no arquivo Commands, Não necessitando de Page object
Por questões técnicas e conhecimento eu fiz um modelo de Page object para Experiências técnicas de que sei fazer!
- Instalado a biblioteca Faker, Para gerar dados faker, Como por exemplo o nome do produto!
-Organizei as pastas de testes da seguinte forma: 2 Pastas contendo os nomes (UI: Para testes de interfáce gráfica) e (API: Testes de API)
-No arquivo produtos.cy.js dentro da pasta UI podemos observar que é possível utilizar testes de interface gráfica mesclando com teste de API como no caso abaixo
onde remove o produto via API, Onde ele foi cadastrado via interface gráfica. Isso deixa o teste mais ágil para rodar em CI/CD

## ✅ Mapear Elementos
- Podemos também mapear os elementos para facilitar na manutenção futura, Nesse projeto eu não utilizei<Mas é uma boa prática> para projetos maiores

## ✅ O que eu usaria para melhorar o projeto e outras observações finais?
-  Aumentar a quantidade de massa de dados criando diversos testes automatizados para cobrir várias telas e cobertura de testes
- Mapear os elementos como descrito no tópico acima
- Esconderia os dados de login como user e password
- Colocaria Testes de API nos custom commands e os UI em page object para não misturar o que é API e UI
- Novas configurações para por um tempo padrão de resposta das API's e Elementos
- Temos a possibilidade de utilizar o comando Retries, Em caso de falhas no teste ele roda novamente ou quantas veses eu definir
- Caso o ERP Possui diversos módulos eu mudaria a forma de organização, Para cada módulo um nome da pasta e dentro dela incluir os processos que seria os arquivos de testes
- Nos testes de API temos vários asserts para incluir e reforçar os testes de API.
- Para testes de UI realizamos os testes mais críticos ou repetitivos dentro de um cenários manual e real.
- Testes de API leva menos tempo para rodar em CI por ser ágil em suas execuções
- Não utilizo cucumber mas não vejo impedimento de não utilizar, a questão é que o cypress com sua linguaguem tradicional já possui uma escrita de testes
que da para entender perfeitamente (Dependendo do jeito que é escrito)


## 🚀 Como executar
```bash
npm install
npx cypress open

