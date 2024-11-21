#language: pt

Funcionalidade: Adicionar produtos no carrinho
Como cliente da EBAC-SHOP
Quero adicionar produtos ao carrinho
Para finalizar minha compra posteriormente

Contexto:
Dado que eu acesse a página de um produto da EBAC-SHOP

Cenário: Adicionar um produto ao carrinho com sucesso
Dado que estou autenticado na plataforma
E estou visualizando a página de um produto disponível
Quando adiciono o produto ao carrinho
Então o produto deve ser exibido no carrinho com a quantidade correta
E o total do carrinho deve ser atualizado corretamente

Cenário: Adicionar mais de 10 itens de um mesmo produto no carrinho não é permitido
Dado que estou autenticado na plataforma
E estou visualizando a página de um produto disponível
Quando tento adicionar mais de 10 itens do mesmo produto ao carrinho
Então recebo a mensagem "Limite máximo de 10 itens do mesmo produto"
E o sistema não permite adicionar mais de 10 itens ao carrinho

Cenário: Valor total do carrinho não pode ser maior que R$990,00
Dado que estou autenticado na plataforma
E estou visualizando a página do carrinho
Quando tento finalizar a compra
Então recebo a mensagem "Valor máximo atingido. Valor total do carrinho não pode ultrapassar R$990,00"
E o sistema não permite finalizar a compra

Cenário: Valor total do carrinho ficou entre R$200 e R$600
Dado que estou autenticado na plataforma
E estou visualizando a página do carrinho
Quando o valor total do carrinho ficar entre R$200 e R$600
Então o sistema deve gerar um cupom de 10% de desconto
E o cupom deve ser aplicado automaticamente no carrinho

Cenário: Valor total do carrinho ficou acima de R$600
Dado que estou autenticado na plataforma
E estou visualizando a página do carrinho
Quando o valor total do carrinho ficar acima de R$600
Então o sistema deve gerar um cupom de 15% de desconto
E o cupom deve ser aplicado automaticamente no carrinho
