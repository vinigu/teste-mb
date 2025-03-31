# mb-test

Este é um projeto [Next.js](https://nextjs.org) criado com [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Começando

Primeiro, execute o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

## Para rodar o projeto

Altere o arquivo .env.example

```bash
Mude o .env.example para .env
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

- `npm run dev`: Inicia o servidor de desenvolvimento com o Turbopack.
- `npm run build`: Cria a versão de produção do aplicativo.
- `npm run start`: Inicia o servidor de produção.
- `npm run postbuild`: Executa o `next-sitemap` após a build.
- `npm run lint`: Executa o ESLint para verificar problemas no código.
- `npm run lint:fix`: Corrige automaticamente problemas detectados pelo ESLint.
- `npm run format`: Formata o código usando Prettier.
- `npm run format:check`: Verifica a formatação do código com Prettier.
- `npm run compile`: Compila o TypeScript.
- `npm run storybook`: Inicia o Storybook no modo de desenvolvimento.
- `npm run build-storybook`: Gera a build do Storybook.

## Teste unitários

Este projeto utiliza o Jest para testes unitários. Para rodar os testes, utilize os seguintes comandos:

- `npm run test`: Executa todos os testes em modo interativo.
- `npm run test:ci`: Executa os testes em modo contínuo (CI/CD).
- `npm run test:changes`: Executa apenas os testes relacionados a arquivos alterados.

Certifique-se de que o Jest está configurado corretamente no projeto antes de rodar os testes.

## Dependências

### Produção

- `@emotion/react`: ^11.14.0
- `@emotion/styled`: ^11.14.0
- `@mui/icons-material`: ^7.0.0
- `@mui/material`: ^7.0.0
- `axios`: ^1.8.4
- `next`: 15.2.4
- `prettier`: ^3.5.3
- `react`: ^19.0.0
- `react-dom`: ^19.0.0
- `react-slick`: ^0.30.3
- `react-toastify`: ^11.0.5
- `react-use`: ^17.6.0
- `slick-carousel`: ^1.8.1

### Desenvolvimento

- `@eslint/eslintrc`: ^3
- `@storybook/addon-actions`: ^8.6.11
- `@storybook/addon-essentials`: ^8.6.11
- `@storybook/addon-links`: ^8.6.11
- `@storybook/nextjs`: ^8.6.10
- `@testing-library/dom`: ^10.4.0
- `@testing-library/react`: ^16.2.0
- `@types/jest`: ^29.5.14
- `@types/node`: ^20
- `@types/react`: ^19
- `@types/react-dom`: ^19
- `@types/react-slick`: ^0.23.13
- `eslint`: ^8.57.1
- `eslint-config-next`: 15.2.4
- `eslint-plugin-next`: ^0.0.0
- `jest`: ^29.7.0
- `typescript`: ^5

## Saiba Mais

Para aprender mais sobre Next.js, confira os seguintes recursos:

- [Documentação do Next.js](https://nextjs.org/docs) - Aprenda sobre os recursos e API do Next.js.
- [Aprenda Next.js](https://nextjs.org/learn) - Um tutorial interativo de Next.js.

Você também pode conferir [o repositório do Next.js no GitHub](https://github.com/vercel/next.js) - seu feedback e contribuições são bem-vindos!

## Deploy na Vercel

A maneira mais fácil de fazer o deploy do seu aplicativo Next.js é usar a [Plataforma Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dos criadores do Next.js.

Confira nossa [documentação de deploy do Next.js](https://nextjs.org/docs/app/building-your-application/deploying) para mais detalhes.
