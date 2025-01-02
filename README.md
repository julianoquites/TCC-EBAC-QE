# Testes E2E e Automação para Loja EBAC

Este repositório contém um projeto de automação de testes desenvolvido para o site da Loja EBAC (http://lojaebac.ebaconline.art.br/). O objetivo foi garantir a qualidade e a robustez da aplicação através de testes de diferentes camadas, como UI, API, mobile e performance.

## Testes Realizados

O projeto incluiu uma série de testes para garantir a qualidade da aplicação da Loja EBAC. Abaixo está um resumo dos tipos de testes realizados:

### 1. Uso de Gherkin e Cucumber
O projeto utilizou o Gherkin com o Cucumber para a criação de testes comportamentais (BDD - Behavior Driven Development), permitindo que as funcionalidades fossem descritas em uma linguagem simples e compreensível tanto para desenvolvedores quanto para stakeholders. Essa abordagem facilitou a comunicação e garantiu que os testes estivessem alinhados com os requisitos do cliente.

### 2. Testes de UI (Interface de Usuário)

- **Login com credenciais válidas**: Simulação de um usuário se cadastrando e realizando login com sucesso.  
- **Visualização de produtos**: Teste para garantir que todos os produtos estão sendo corretamente exibidos na página de produtos.  
- **Adição de itens ao carrinho**: Teste de interação do usuário, simulando a adição de produtos ao carrinho de compras.  
- **Navegação no menu**: Verificação da navegação entre as páginas principais do site, incluindo menus de categorias e perfil.  

**Tecnologia utilizada**: [Cypress](https://www.cypress.io/).  

### 3. Testes de API

- **Login de usuário**: Teste de autenticação, enviando requisições de login e verificando se o token de acesso foi gerado corretamente.  
- **Validação de endpoints de produtos**: Verificação das operações CRUD (criar, ler, atualizar, excluir) em produtos disponíveis na loja.  
- **Validação de endpoints de categorias**: Teste para garantir que as categorias de produtos podem ser recuperadas corretamente via API.  
- **Testes de autenticação e sessão**: Validação de fluxos de login e de acesso às áreas protegidas da aplicação.  
- **Validação de contratos**: Verificação do formato e estrutura das respostas da API para garantir conformidade com os contratos estabelecidos.  

**Tecnologia utilizada**: [Supertest](https://github.com/ladjs/supertest).  

### 4. Testes Mobile (Android)

- **Acessibilidade e responsividade**: Testes para garantir que o site esteja otimizado e funcional em dispositivos móveis Android, verificando o layout e a interação com os elementos.  
- **Cadastro e login no dispositivo móvel**: Teste da funcionalidade de cadastro e login via versão mobile da aplicação em dispositivos Android.  

**Tecnologias utilizadas**: [Appium](https://appium.io/) com [WebdriverIO](https://webdriver.io/).  

### 5. Testes de Performance

- **Teste de carga**: Simulação de múltiplos usuários acessando o site simultaneamente para verificar como o sistema lida com picos de tráfego.  
- **Teste de estresse**: Avaliação do comportamento do site sob condições extremas de carga, visando identificar possíveis pontos de falha.  

**Tecnologia utilizada**: [k6](https://k6.io/).  

### 6. Testes de Integração Contínua

- **Execução automática de testes de UI**: Todos os testes de UI foram configurados para rodar automaticamente sempre que uma mudança for realizada no código (via GitHub Actions), garantindo que o fluxo de integração contínua seja seguido.  
- **Publicação de relatórios**: Os resultados dos testes de UI são gerados e publicados automaticamente em uma página no GitHub Pages.  
