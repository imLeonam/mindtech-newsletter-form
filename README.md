## Como iniciar o projeto

Primeiro instale as dependências:

```bash
npm install
# ou
yarn
```

Segundo, crie o banco de dados:

```bash
npm run db:migrate
# ou
yarn db:migrate
```

Terceiro, inicie o projeto em modo de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

### Para fazer o teste de desinscrição:

Eu pensei em mandar junto dos emails de newsletter uma anchor, que contenha um campo de parâmetro do email no banco de dados, como por exemplo, o id.
Ao clicar neste link ele é redirecionado para a rota [http://localhost:3000/newsletter/unsubscribe/id](http://localhost:3000/newsletter/unsubscribe/id) onde será feita a desinscrição da newsletter.

Este projeto usa [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) pra optimizar e carregar automaticamente a Inter, uma fonte customizada do Google Font.
