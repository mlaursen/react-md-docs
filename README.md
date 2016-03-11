# react-md-docs
The documentation website for [react-md](https://github.com/mlaursen/react-md)

# Getting Started


```bash
$ git clone https://github.com/mlaursen/react-md
$ git clone https://github.com/mlaursen/react-md-docs
$ cd react-md && npm i && npm run build && npm link
$ cd ../react-md-docs && npm i && npm link react-md

# Until eslint gets fixed..
$ npm i estraverse-fb

# Finally start the docs server
$ npm start
```

This will clone both respositories and link the react-md project to the docs project so
any changes that happen in react-md will be reflected in the docs.


### Basic Usage


```bash
$ npm start      # starts the webpack dev server and watches changes
$ npm run docs   # builds the prod-ready bundle and pushes to gh-pages
```
