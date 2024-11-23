const { defineConfig } = require("cypress");
const mochawesome = require("cypress-mochawesome-reporter/plugin"); // Importa o plugin

module.exports = defineConfig({
  projectId: "88v65r",
  reporter: "cypress-mochawesome-reporter", // Define o reporter como cypress-mochawesome-reporter
  reporterOptions: {
    reportDir: "cypress/reports/mochawesome", // Diretório dos relatórios
    reportFilename: "report", // Nome do arquivo de relatório
    overwrite: false,
    html: true,
    json: true,
    charts: true,
  },
  e2e: {
    baseUrl: "http://lojaebac.ebaconline.art.br/", // URL base para os testes
    setupNodeEvents(on, config) {
      mochawesome(on); // Chama o plugin no evento de configuração
      // Você pode adicionar outros event listeners aqui, se necessário
    },
  },
});
