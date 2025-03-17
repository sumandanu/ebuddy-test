# Buddy Test

This Turborepo starter is maintained by the Turborepo core team.

This example also shows how to use [Workspace Configurations](https://turbo.build/repo/docs/core-concepts/monorepos/configuring-workspaces).

## Using this example

Run the following command:

```sh
pnpm install
```

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- firebase-tools
  ```sh
  npm install firebase-tools -g
  ```

### Installation

1. Get a firebase API Key at [https://firebase.google.com/](https://firebase.google.com/)
2. Clone the repo
   ```sh
   git clone https://github.com/sumandanu/ebuddy-test.git
   ```
3. Install PNPM packages
   ```sh
   pnpm install
   ```
4. Download ServiceAccountKey firebase and save in folder
   ```js
   apps / backend - app / path / to;
   ```
5. Rename your .env
   ```js
   apps/backend-app/env-example to apps/backend-app/.env
   ```
   ```js
   apps/frontend-app/env-example to apps/frontend-app/.env
   ```
6. Enter your API FIREBASE in `apps/backend-app/.env`
   ```js
   FIREBASE_API_KEY = your - api - key;
   FIREBASE_AUTH_DOMAIN = your - auth - domain;
   FIREBASE_PROJECT_ID = your - project - id;
   FIREBASE_STORAGE_BUCKET = your - storage - bucket;
   FIREBASE_MESSAGING_SENDER_ID = your - messaging - sender - id;
   FIREBASE_APP_ID = your - app - id;
   ```
7. Enter your API FIREBASE in `apps/frontend-app/.env`
   ```js
   NEXT_PUBLIC_BACKEND_API_URL=http://127.0.0.1:5001/{project_id}/{region_id}
   ```
8. Run project
   ```sh
   pnpm dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `backend-app`: an [Express](https://expressjs.com/) server
- `frontend-app`: a [Next.js](https://nextjs.org/) app
- `@repo/eslint-config`: ESLint configurations used throughout the monorepo
- `@repo/jest-presets`: Jest configurations
- `@repo/logger`: isomorphic logger (a small wrapper around console.log)
- `@repo/ui`: a dummy React UI library (which contains `<CounterButton>` and `<Link>` components)
- `@repo/typescript-config`: tsconfig.json's used throughout the monorepo

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting
