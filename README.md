# Tutorial: Instalação, Configuração e Uso do ESLint

O [ESLint](https://eslint.org/) é uma ferramenta de linting para JavaScript que ajuda a identificar problemas no código e manter um estilo consistente. Este tutorial cobre sua instalação, integração ao ambiente de desenvolvimento, estilização automática e exemplos de regras configuráveis, utilizando o formato moderno Flat Config (`eslint.config.mjs`) disponível a partir da versão 9.x.

## Instruções de Instalação

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado.
2. No terminal, no diretório do seu projeto, instale o ESLint e dependências necessárias:
   ```bash
   npm install eslint @eslint/js globals --save-dev
   ```
3. Crie um arquivo de configuração `eslint.config.mjs` na raiz do projeto. Um exemplo básico será mostrado abaixo.

**Nota**: O comando `npx eslint --init` ainda gera o formato antigo (`.eslintrc`), então, para o Flat Config, recomenda-se configurar manualmente ou adaptar o resultado.

## Integração ao Ambiente de Desenvolvimento

### Visual Studio Code
- Instale a extensão [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) no VS Code.
- O ESLint detectará automaticamente o arquivo `eslint.config.mjs` (se o VS Code e o ESLint estiverem atualizados) e exibirá erros/sugestões no editor.

### Uso via Terminal
- Verifique arquivos manualmente:
  ```bash
  npx eslint seu-arquivo.js
  ```
- Corrija problemas automaticamente:
  ```bash
  npx eslint seu-arquivo.js --fix
  ```

## Estilização Automática

O ESLint pode corrigir automaticamente problemas de estilo com a opção `--fix`:
- Configure regras corrigíveis no `eslint.config.mjs` (ex.: espaçamento, ponto e vírgula).
- No VS Code, habilite correção ao salvar adicionando ao `settings.json`:
  ```json
  {
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  }
  ```

## Guias de Estilo Utilizados

O ESLint suporta guias de estilo populares que podem ser integrados no Flat Config:
- **[Airbnb](https://github.com/airbnb/javascript)**: Regras rigorosas (`npm install eslint-config-airbnb-base` para JS puro).
- **[Standard](https://standardjs.com/)**: Estilo simples, sem ponto e vírgula (`npm install eslint-config-standard`).
- **[Google](https://github.com/google/eslint-config-google)**: Guia da Google (`npm install eslint-config-google`).

Exemplo com Airbnb no Flat Config (requer adaptação):
```javascript
import airbnb from 'eslint-config-airbnb-base';
export default [
  { files: ["**/*.js"] },
  airbnb
];
```

Para este tutorial, usaremos as regras recomendadas do `@eslint/js`.

## Regras de Estilo Configuráveis

Algumas regras que podem ser personalizadas no `eslint.config.mjs`:
1. **`semi`**:
   - Exige ou proíbe ponto e vírgula.
   - Exemplo: `"semi": ["error", "always"]`.
2. **`quotes`**:
   - Define aspas simples ou duplas.
   - Exemplo: `"quotes": ["error", "single"]`.
3. **`no-unused-vars`**:
   - Detecta variáveis não usadas.
   - Exemplo: `"no-unused-vars": "warn"`.

Exemplo de configuração completa:
```javascript
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import js from '@eslint/js';

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs}'] },
  { 
    languageOptions: { 
      sourceType: 'script',
      globals: globals.node 
    },
    ...js.configs.recommended,
    rules: {
      'semi': ['error', 'always'],
      'quotes': ['error', 'single'],
      'no-unused-vars': 'warn',
      'eqeqeq': 'error',
      'prefer-template': 'error'
    }
  }
]);
```

## Exemplo de Código

### Antes
```javascript
let nome = "João"
function ola(nome){
  console.log("Olá " + nome)
}
let idade = 25;
```

### Depois (com `--fix`)
```javascript
let nome = 'João';
function ola(nome) {
  console.log(`Olá ${nome}`);
}
let idade = 25; // Aviso: variável não usada
```

### Correções Aplicadas
- Aspas duplas -> simples (`quotes`).
- Ponto e vírgula adicionado (`semi`).
- Concatenação substituída por template literal (`prefer-template`).
- Aviso sobre `idade` não usada (`no-unused-vars`).
```
