---
name: Getting Started
route: /
---

![Health](https://github.com/Doctor-Strange/health/blob/master/public/images/logo.png?raw=true)

# Health Front-end

## Stack

- **React.js**
- **Next.js** for SSR
- **TypeScript** for sake of god
- **SCSS, CSS** for styling components
- **SEO** Next SEO
- **Cypress** For the tests

## What Did I Do?

I used react hooks and TypeScript.
I choose Next js to show my abilities on server-side rendering, Next js is more Seo friendly and google can easily interact with it, in the page files, you can find the NextSeo which is very helpful for the SEO.
I implemented Scss, CSS, and Modular Style in the project, this way you have the power to even import some CSS file which is related to some libraries directly imported inside components, besides that whit the power of the CSS module there is no overlapping in classes or styles.
I have tested the application with the cypress, it's so faster and easy to deploy.
If you don't want to set up the Cypress, I have made a video of the test process which you can just watch.

## Setting up

### Installation

```sh
git clone https://github.com/Doctor-Strange/health
npm install
```

#### Start the development

The development will be running on port 3000

```sh
npm run dev
```

## Test

To test the application after running the Cypress click on the ;test.spec.js' file, the rest of the process will be started automatically.

#### Attention

Before running the cypres you should run the project in the development mode.
you may get an error at the first load of the cypress
It's not an actual error just close the browser window and click on the test file again
if that's not working the alternative solution is got to

```
Health
├─ cypress
│ ├─ integration
│ │ └─ test.spec.js
```

open the file in IDE and just press CTRL+S or CMD+S to rerun the test
I know it's annoying and weird bug :|

```bash
npm run cypress # test
```

After a minute, the cypress window will show up and you can click on the 'test.spec.js' file.

## Usage

This project is build on top of [Next.js](https://nextjs.org/docs).

## Folder Structure

```
Health
├─ cypress
│  ├─ fixtures
│  │  └─ example.json
│  ├─ integration
│  │  └─ test.spec.js
│  ├─ plugins
│  │  └─ index.js
│  └─ support
│     ├─ commands.js
│     └─ index.js
├─ cypress.json
├─ next-env.d.ts
├─ next.config.js
├─ package-lock.json
├─ package.json
├─ pages
│  ├─ index.tsx
│  ├─ make-appointments.tsx
│  ├─ manage-appointments.tsx
│  ├─ _app.tsx
│  └─ _document.tsx
├─ public
│  ├─ fav.png
│  ├─ images
│  │  ├─ banner.jpg
│  │  └─ logo.png
│  ├─ Vector.png
│  └─ Vector.svg
├─ src
│  ├─ components
│  │  ├─ footer
│  │  │  ├─ footer.module.css
│  │  │  └─ footer.tsx
│  │  └─ header
│  │     ├─ header.module.scss
│  │     └─ header.tsx
│  ├─ Layout
│  │  ├─ Layout.module.scss
│  │  └─ layout.tsx
│  ├─ utils
│  │  ├─ delete-from-local-storage.ts
│  │  ├─ read-from-local-storage.ts
│  │  ├─ save-to-localstorage.ts
│  │  └─ validation.ts
│  └─ views
│     ├─ appointments
│     │  ├─ make
│     │  │  ├─ make.module.scss
│     │  │  └─ make.tsx
│     │  └─ manage
│     │     ├─ manage.module.scss
│     │     └─ manage.tsx
│     └─ home
│        ├─ home.module.scss
│        └─ home.tsx
├─ styles
│  ├─ globals.scss
│  ├─ styleReset.scss
│  ├─ _colors.scss
│  ├─ _font.scss
│  ├─ _function.scss
│  ├─ _mixin.scss
│  └─ _units.scss
└─ tsconfig.json

```
