#language: pt

Funcionalidade: Gerenciamento de cupons
Como admin da EBAC-SHOP
Quero criar um serviço de cupons
Para poder listar e cadastrar cupons de desconto

Cenário: Listar todos os cupons cadastrados
Dado que o admin está autenticado na plataforma com usuário e senha válidos
Quando o admin realiza uma solicitação GET para listar todos os cupons pelo endpoint `/wc/v3/coupons`
Então o sistema deve retornar a lista de cupons cadastrados no sistema

Cenário: Buscar cupom por ID
Dado que o admin está autenticado na plataforma com usuário e senha válidos
 E existe um cupom cadastrado com o ID fornecido
Quando o admin realiza uma solicitação GET para buscar o cupom pelo ID pelo endpoint `/wc/v3/coupons/{id}`
Então o sistema deve retornar as informações do cupom correspondente ao ID solicitado

Cenário: Cadastrar um novo cupom com os campos obrigatórios
Dado que o admin está autenticado na plataforma com usuário e senha válidos
Quando o admin realiza uma solicitação POST para cadastrar um cupom, pelo endpoint `/wc/v3/coupons`, com os seguintes dados:
| Código    | Valor   | Tipo de desconto | Descrição        |
| "Ganhe10" | "10.00" | "fixed_product"  | "Cupom de teste" |
Então o sistema deve cadastrar o novo cupom e retornar uma confirmação com os dados cadastrados

Cenário: Não permitir cupom com código repetido
Dado que o admin está autenticado na plataforma com usuário e senha válidos
E já existe um cupom cadastrado com o código "Ganhe10"
Quando o admin tenta cadastrar um novo cupom com o código "Ganhe10"
Então o sistema deve exibir uma mensagem de erro informando que o código do cupom já está em uso
E o sistema não deve permitir o cadastro do cupom com código repetido
