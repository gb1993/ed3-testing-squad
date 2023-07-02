
# ED3 Testing Squad

Esse é um boilerplate para aprimorar as habilidades de testes unitários.

# Tecnologias

Este é um guia para executar um projeto com as seguintes tecnologias:

- Node.js 18.16.1
- Vite + React JS
- Jest
- RTL (React Testing Library)
- Yarn

Certifique-se de ter o Node.js instalado em sua máquina antes de prosseguir. Você pode encontrar o Node.js em [https://nodejs.org/](https://nodejs.org/).

## Configuração do Projeto

1. Clone o repositório para o seu ambiente local:

   ```
   git clone https://github.com/gb1993/ed3-testing-squad.git
   ```

2. Navegue até o diretório do projeto:

   ```
   cd ed3-testing-squad
   ```

3. Instale as dependências do projeto utilizando o Yarn:

   ```
   yarn install
   ```

## Executando o Projeto

Para iniciar o projeto localmente, execute os seguintes comandos:

```
yarn dev
```

Este comando iniciará o Vite, que é um bundler rápido para projetos React, e abrirá o projeto no seu navegador padrão.

## Testes

Este projeto utiliza o Jest como framework de testes e o RTL (React Testing Library) para testar componentes React.
Os testes estão na pasta src/tests

Para executar os testes, utilize o seguinte comando:

```
yarn test
```
ou

```
yarn test --coverage
```

Para saber mais sober JEST [Clique Aqui](https://jestjs.io/docs/getting-started)


## Recursos Adicionais

- Para personalizar a configuração do Babel, você pode editar o arquivo `babel.config.js`.
- Para personalizar a configuração do Jest, você pode editar o arquivo `jest.config.js`.

Certifique-se de consultar a documentação oficial de cada tecnologia para obter mais informações sobre suas configurações e recursos.
