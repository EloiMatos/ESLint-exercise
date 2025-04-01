Aqui está o tutorial adaptado para um formato Markdown, ideal para ser incluído em um README.md no GitHub. Ele mantém todos os elementos solicitados no exercício, incluindo instruções, integração, estilização automática, guias de estilo, regras configuráveis e o exemplo de código.
Tutorial: Instalação, Configuração e Uso do ESLint

O ESLint é uma ferramenta de linting para JavaScript que ajuda a identificar problemas no código e manter um estilo consistente. Este tutorial cobre sua instalação, integração ao ambiente de desenvolvimento, estilização automática e exemplos de regras configuráveis.
Instruções de Instalação

    Certifique-se de ter o Node.js instalado.
    No terminal, no diretório do seu projeto, instale o ESLint como dependência de desenvolvimento:
    bash

npm install eslint --save-dev
Inicialize a configuração do ESLint:
bash

    npx eslint --init
        Responda às perguntas (ex.: ambiente Node ou Browser, estilo de código).
        Isso gera um arquivo .eslintrc.js ou similar.

Integração ao Ambiente de Desenvolvimento
Visual Studio Code

    Instale a extensão ESLint no VS Code.
    O ESLint detectará automaticamente o arquivo de configuração e exibirá erros/sugestões no editor.

Uso via Terminal

    Verifique arquivos manualmente:
    bash

npx eslint seu-arquivo.js
Corrija problemas automaticamente:
bash

    npx eslint seu-arquivo.js --fix

Estilização Automática

O ESLint pode corrigir automaticamente problemas de estilo com a opção --fix:

    Configure regras corrigíveis no .eslintrc.js (ex.: espaçamento, ponto e vírgula).
    No VS Code, habilite correção ao salvar adicionando ao settings.json:
    json

    {
      "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
      }
    }

Guias de Estilo Utilizados

O ESLint suporta guias de estilo populares via "extends" no arquivo de configuração:

    Airbnb: Regras rigorosas (npm install eslint-config-airbnb).
    Standard: Estilo simples, sem ponto e vírgula (npm install eslint-config-standard).
    Google: Guia da Google (npm install eslint-config-google).

Exemplo com Airbnb:
javascript
module.exports = {
  "extends": "airbnb"
};
Regras de Estilo Configuráveis

Algumas regras que podem ser personalizadas no .eslintrc.js:

    semi:
        Exige ou proíbe ponto e vírgula.
        Exemplo: "semi": ["error", "always"].
    quotes:
        Define aspas simples ou duplas.
        Exemplo: "quotes": ["error", "single"].
    no-unused-vars:
        Detecta variáveis não usadas.
        Exemplo: "no-unused-vars": "warn".

Exemplo de configuração:
javascript
module.exports = {
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "single"],
    "no-unused-vars": "warn"
  }
};
Exemplo de Código
Antes
javascript
let nome = "João"
function ola(nome){
  console.log("Olá " + nome)
}
let idade = 25;
Depois (com --fix)
javascript
let nome = 'João';
function ola(nome) {
  console.log('Olá ' + nome);
}
let idade = 25; // Aviso: variável não usada
Correções Aplicadas

    Aspas duplas -> simples (quotes).
    Ponto e vírgula adicionado (semi).
    Aviso sobre idade não usada (no-unused-vars).
