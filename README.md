# C1 Monorepo

## Overview
This repository uses pnpm workspace to manage a mutli-package monorepo


## Setup
You need pnpm installed
```bash
npm install -g pnpm
```
Install dependencies
```bash
pnpm install
```
## Development Server

Run the fullstack application in development mode (with live reload enabled in the backend):

```bash
pnpm dev
```
Run a particular application in development mode:

```bash
# run from root folder
pnpm --filter onboarding run dev

# or navigate to app folder (apps/onboarding) and run
pnpm dev
```


## Production Server
Build the application for production:
```bash
pnpm build
```
Locally preview production build:
```bash
pnpm preview
```

## Project layout

```
└───package.json        Root project metadata
└───pnpm-lock.yaml      Dependencies lockfile
└───pnpm-workspace.yaml Pnpm workspace configuration
└───READ.md             Root project Readme file
└───.gitignore          Git Ignore file
└───apps                Folder for Nuxt 3 apps
    │─── onboarding     Onboarding app
    │─── dashboard      Dashboard app
└───layers              Folder for Nuxt layers (to be extended in Nuxt apps)
    │─── base           Base app
└───packages            Folder for packages / libraries
    │─── ...
```

## Steps to create a new App
- Navigate to folder `apps`
  ```bash
  cd apps
  ```
- Run following command to create a NUXT 3 app (replace `my-app` with the desired name)
  ```bash
  pnpx nuxi@latest init my-app
  ```
- Navigate into `my-app`
  ```bash
  cd my-app
  ```
- Update name value to `my-app` in package.json
  ```json
  {
    "name": "my-app",
    ...
  ```
- Edit `nuxt.config.ts` to extend `base` app
  ```ts
  export default defineNuxtConfig({
    extends: [
      '../../layers/base'
    ],
    ...
  ```
- Edit `nuxt.config.ts` to configure an unused port number for dev server
  ```ts
  export default defineNuxtConfig({ 
    devServer: {
      port: 3001
    }
  ```
- Edit `package.json` to configure the same port number for preview
  ```json
  {
    "scripts": {
      "preview": "set PORT=3001 && nuxt preview"
      ...
  ```
## Guidelines to decide what goes into the Base layer
Before adding any new changes in an App, consider whether the changes should reside in the `base` app.

General guidelines:
- Following repository content should be considered for `base` app
  - module-app-micro-base
  - libs-frontend-micro-base
- Build system configurations
- Commong components like C1 header, footer
- Resuable UI elements like buttons, dropdowns etc.
- C1 Global themes
- Common assets
- Common app `runtimeConfig` configurations like environment variables