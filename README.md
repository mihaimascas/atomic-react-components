# Atomoc Design: React POC 
Applying patternlab.io design systems to React components.

BEM css class naming convention.

## How to use

```
npm install atomic-react-components --save-dev
```

GitHub repository: https://github.com/mihaimascas/atomic-react-components


## Project setup

```
$ npm install
```

Build project:

```
$ npm run build
```

Builds the project with webpack config: `webpack.config.prod.js`.

Run dev server

```
$ npm run start
```

Opens web server: localhost:3011
Dev webpack configs are used (`webpack.config.dev.js`).

## TDD

```
$ npm run test:watch
```

To oly run the test use:
 
```
$ npm run test
```


## Documentation 

Library documentation is generated from comments using [ESdocs](https://esdoc.org/). To generate the documentation use the following command:

```
$ npm run doc
```

Documentation is static and is dored in `dist/doc` folder.