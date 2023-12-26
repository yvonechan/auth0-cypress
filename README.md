# auth0-cypress

This project is to learn the usage of cypress with auth0 and vue3.
It is a simple application that allows a user to login via Auth0 and submit answers via a form.
The results submitted will be shown in another page.

## Next Steps

1. Add more tests
2. Integrate with GitHub Actions

## Project Setup

```sh
npm install
```

## Build Tailwind CSS

```sh
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Headed Component Tests with [Cypress Component Testing](https://on.cypress.io/component)

```sh
npm run test:unit:dev # or `npm run test:unit` for headless testing
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.
It is much faster than the production build.

But it's still recommended to test the production build with `test:e2e` before deploying (e.g. in CI environments):

```sh
npm run build
npm run test:e2e
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
