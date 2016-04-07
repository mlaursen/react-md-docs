# react-md-docs
The documentation website for [react-md](https://react-md.mlaursen.com)

# Getting Started


```bash
$ git clone https://github.com/mlaursen/react-md
$ git clone https://github.com/mlaursen/react-md-docs
$ cd react-md && npm i && npm run build && npm link
$ cd ../react-md-docs && npm i && npm link react-md

# Until eslint gets fixed..
$ npm i estraverse-fb

# Finally start the docs dev server
$ npm run browser
```

This will clone both respositories and link the react-md project to the docs project so
any changes that happen in react-md will be reflected in the docs.


### Basic Usage


```bash
$ npm start         # builds and starts the production server
$ npm run browser   # starts the dev server and watches for changes
```
