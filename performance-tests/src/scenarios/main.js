import http from "k6/http";
import { sleep, check } from "k6";
import { USERS } from "../data/users.js";

// Configurações de teste
export const options = {
  // Cenário de carga
  stages: [
    { duration: "20s", target: 20 }, // Rampa de subida
    { duration: "2m", target: 20 }, // Carga sustentada
    { duration: "20s", target: 0 }, // Rampa de descida
  ],
};

// Função de login
function login(user) {
  const loginUrl =
    "http://lojaebac.ebaconline.art.br/wp-json/jwt-auth/v1/token";
  const payload = JSON.stringify({
    username: user.username,
    password: user.password,
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = http.post(loginUrl, payload, params);

  // Verifica se o login foi bem-sucedido
  check(res, {
    "login status is 200": (r) => r.status === 200,
    "has access token": (r) => JSON.parse(r.body).token !== undefined,
  });

  return res;
}

// Teste principal
export default function () {
  // Seleciona usuário de forma Round Robin
  const user = USERS[__ITER % USERS.length];

  // Realiza login
  const loginResponse = login(user);

  // Simulação de pausa entre ações
  sleep(1);
}
