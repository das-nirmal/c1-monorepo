# 🔴Moved to https://github.com/comprodls/ref-monorepo

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
# run from root folder
pnpm install
```
## Development Server

Run an app (say `onboarding`) in development mode:

```bash
# run from root folder
pnpm --filter onboarding dev
```

## Install a NPM package within an app
Install a NPM package within an app:
```bash
# run from root folder
pnpm --filter onboarding install <npm-package>

# for dev-dependency
pnpm --filter onboarding install -D <npm-package>
```

## Production Server
Build an app (say `onboarding`) for production:
```bash
# run from root folder
pnpm --filter onboarding build
```
Locally preview production build:
```bash
# run from root folder
pnpm --filter onboarding preview
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
- Run following command to create a NUXT 3 app (replace `my-app` with the desired name)
  ```bash
  pnpx nuxi@latest init apps/my-app
  ```
- Navigate to `apps/my-app`
- Edit `package.json` to update package name to `my-app`
  ```json
  {
    "name": "my-app",    
  ```
- Edit `nuxt.config.ts` to extend `base` app
  ```ts
  export default defineNuxtConfig({
    extends: [
      '../../layers/base'
    ],
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
      
  ```
## Guidelines to decide what goes into the Base layer
Before adding any new changes in an App, consider whether the changes should reside in the `base` app.

General guidelines:
- Following repository content should be considered for `base` app
  - module-app-micro-base
  - libs-frontend-micro-base
- Build system configurations
- Common components like C1 header, footer
- Reusable UI elements like buttons, dropdowns etc.
- C1 Global themes
- Common assets
- Common app `runtimeConfig` configurations like environment variables
