# C1 Monorepo

## Overview
This repository uses pnpm workspace to manage mutli-package monorepo


## Setup
You need pnpm installed
```bash
npm install -g pnpm
```
Install dependencies
```bash
pnpm install
```
## Run in development

Run the fullstack application in development mode (with live reload enabled in the backend):

```bash
pnpm dev
```
Run specific application in development mode (with live reload enabled in the backend):

```bash
pnpm --filter onboarding run dev
```
*Note: 'name' must be configured in corresponding package.json (for e.g. 'onboarding' in this case)*

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
    "name": "my-appapp
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
## Guidelines to decide what goes into the Base layer
Before adding any new changes in an App, consider whether the changes should reside in the `base` app.

General guidelines:
- Following repository content should be considered 
  - module-app-micro-base
  - libs-frontend-micro-base
- Build related configurations
- Common app `runtimeConfig` configurations like environment variables
- Commong components like C1 header, footer
- Resuable UI elements like buttons, dropdowns etc.
- C1 Global themes
- Common assets