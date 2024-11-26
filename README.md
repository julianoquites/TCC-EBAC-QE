# Trabalho de Conclusão - Engenharia de Qualidade de Software EBAC

Este repositório contém o trabalho de conclusão de curso, no qual realizei a automação de testes para o site da  Loja EBAC (http://lojaebac.ebaconline.art.br/). O objetivo do projeto foi garantir a qualidade e a robustez da aplicação através de testes de diferentes camadas, como UI, API, mobile e performance.

## Testes Realizados

O projeto incluiu uma série de testes para garantir a qualidade da aplicação da Loja EBAC. Abaixo está um resumo dos tipos de testes realizados:

### 1. Testes de UI (Interface de Usuário)

- **Login com credenciais válidas**: Simulação de um usuário se cadastrando e realizando login com sucesso.
- **Visualização de produtos**: Teste para garantir que todos os produtos estão sendo corretamente exibidos na página de produtos.
- **Adição de itens ao carrinho**: Teste de interação do usuário, simulando a adição de produtos ao carrinho de compras.
- **Navegação no menu**: Verificação da navegação entre as páginas principais do site, incluindo menus de categorias e perfil.

### 2. Testes de API

- **Login de usuário**: Teste de autenticação, enviando requisições de login e verificando se o token de acesso foi gerado corretamente.
- **Validação de endpoints de produtos**: Verificação das operações CRUD (criar, ler, atualizar, excluir) em produtos disponíveis na loja.
- **Validação de endpoints de categorias**: Teste para garantir que as categorias de produtos podem ser recuperadas corretamente via API.
- **Testes de autenticação e sessão**: Validação de fluxos de login e de acesso às áreas protegidas da aplicação.

### 3. Testes Mobile

- **Acessibilidade e responsividade**: Testes para garantir que o site esteja otimizado e funcional em dispositivos móveis, verificando o layout e a interação com os elementos.
- **Cadastro e login no dispositivo móvel**: Teste da funcionalidade de cadastro e login via versão mobile da aplicação.
  
### 4. Testes de Performance

- **Teste de carga**: Simulação de múltiplos usuários acessando o site simultaneamente para verificar como o sistema lida com picos de tráfego.
- **Teste de estresse**: Avaliação do comportamento do site sob condições extremas de carga, visando identificar possíveis pontos de falha.

### 5. Testes de Integração Contínua

- **Execução automática de testes de UI**: Todos os testes de UI foram configurados para rodar automaticamente sempre que uma mudança for realizada no código (via GitHub Actions), garantindo que o fluxo de integração contínua seja seguido.
- **Publicação de relatórios**: Os resultados dos testes de UI são gerados e publicados automaticamente em uma página no GitHub Pages.


