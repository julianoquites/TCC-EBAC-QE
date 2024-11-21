#language: pt

Funcionalidade: Login
Como cliente da EBAC-SHOP
Quero fazer o login (autenticação) na plataforma
Para visualizar meus pedidos

Cenário: Login com usuário ativo e dados corretos
Dado que o usuário está registrado e ativo na plataforma
E o usuário fornece login e senha corretos
Quando ele tenta fazer login
Então o sistema deve permitir o login e redirecionar o usuário para a página de pedidos

Cenário: Mensagem de erro em caso de login ou senha incorretos
Dado que o usuário está registrado e ativo na plataforma
E o usuário fornece dados de login ou senha incorretos
Quando ele tenta fazer login
Então o sistema deve exibir a mensagem de erro "Login ou senha inválidos"

Cenário: Bloqueio de login após 3 tentativas incorretas de senha
Dado que o usuário está registrado e ativo na plataforma
E o usuário falha ao tentar fazer login com senha incorreta 3 vezes consecutivas
Quando ele tentar fazer login pela 4ª vez
Então o sistema deve bloquear a tentativa de login por 15 minutos
E exibir a mensagem "Você excedeu o número de tentativas. Tente novamente em 15 minutos."

Cenário: Login de usuário inativo
Dado que o usuário está registrado, mas sua conta está inativa
Quando ele tenta fazer login na plataforma
Então o sistema deve exibir a mensagem "Sua conta está inativa. Entre em contato com o suporte."
E impedir que o usuário faça login