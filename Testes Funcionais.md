Plano de Teste Manual Exploratório: Cadastro e Remoção de Produtos
Analista de QA: Guga Martins
Tipo de Teste: Manual Exploratório


1. Objetivo
Validar o processo completo de cadastro, visualização e remoção de um produto no sistema, focando na identificação de possíveis falhas, mensagens de erro, validações de campos e caminhos alternativos para garantir a robustez e a qualidade da funcionalidade.

2. Entendimento do Processo
A primeira etapa consiste em compreender profundamente o fluxo de negócio. O domínio sobre como o sistema deve se comportar, quais dados são obrigatórios e as regras de validação envolvidas é fundamental para a execução de testes exploratórios eficazes e aprofundados.

3. Cenários de Teste
Objetivo: Cadastrar um novo produto no sistema sem encontrar erros.
Etapa	Ação Realizada	Resultado Esperado	Observações
1	Acessar a tela de "Cadastrar Produto".	A página deve carregar com o formulário de cadastro.	Validar se todos os campos estão visíveis e renderizados corretamente.
2	Preencher todos os campos obrigatórios (ex: nome, preço, descrição).	O formulário deve ser preenchido corretamente.	Validar máscaras de dados (R$), tipos de dados (numérico, texto) e limites de caracteres.
3	Clicar no botão "Cadastrar".	O sistema deve exibir uma mensagem de sucesso (ex: "Produto cadastrado com sucesso!").	Conferir se o produto é adicionado à listagem de produtos imediatamente.
4	Verificar a tabela de produtos.	O produto recém-cadastrado deve constar na listagem.	Validar se todos os dados (nome, preço, etc.) estão formatados e apresentados corretamente na tabela.
Objetivo: Verificar a robustez do sistema ao lidar com entradas de dados inválidas.
Cenário	Ação Realizada	Resultado Esperado
Cadastro sem preenchimento	Submeter o formulário com todos os campos obrigatórios vazios.	O sistema deve exibir uma mensagem de erro específica para cada campo obrigatório não preenchido.
Preço com valor negativo	Tentar submeter o formulário com um valor negativo no campo "preço" (ex: "-10,00").	A submissão deve ser bloqueada e uma mensagem de erro de validação deve ser exibida.
Dado inválido em campo numérico	Inserir texto (ex: "abc") no campo "preço".	O sistema deve recusar a entrada, não permitir a submissão ou formatar o campo para zero, exibindo uma validação.
Objetivo: Garantir que um produto existente possa ser removido com sucesso.
Etapa	Ação Realizada	Resultado Esperado
1	Acessar a listagem de produtos.	O produto cadastrado anteriormente deve estar visível na lista.
2	Localizar o produto e clicar no botão "Remover" ou "Excluir".	Uma janela de confirmação (modal) deve ser exibida para evitar remoção acidental.
3 Confirmar a exclusão	Clicar no botão de confirmação (ex: "Sim, excluir").	Uma mensagem de sucesso (ex: "Produto removido com sucesso") deve aparecer e o produto não deve mais ser exibido na listagem.

4. Outros Pontos Exploratórios
Estado do Botão: O botão "Cadastrar" permanece desabilitado até que todos os campos obrigatórios sejam preenchidos com dados válidos?
Duplicidade de Dados: O sistema permite o cadastro de produtos com nomes idênticos? Qual é o comportamento esperado?
Feedback Visual: Existe um feedback visual claro durante as ações, como um ícone de "loading" ou o bloqueio de botões para prevenir cliques duplos?
Logs no Navegador: Há algum erro sendo registrado no console do navegador (F12) durante a execução dos fluxos?
Responsividade: A página de cadastro e listagem de produtos se adapta corretamente a diferentes resoluções de tela (desktop, tablet, mobile)?

5. Conclusão
Com um entendimento claro do fluxo de negócio, sinto-me seguro para conduzir testes exploratórios eficazes. A abordagem abrange os caminhos felizes, cenários de exceção e validações de comportamento visual, garantindo uma cobertura de teste abrangente e contribuindo para a entrega de um software de alta qualidade.