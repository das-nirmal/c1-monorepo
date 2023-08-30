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
    │─── base           Base layer
└───packages            Folder for packages / libraries
    │─── ...
```