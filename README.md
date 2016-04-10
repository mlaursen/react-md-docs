# react-md-docs
The documentation website for [react-md](https://github.com/mlaursen/react-md)

This is done as a separate repositority as a lazy way of checking that the react-md works as an npm module.

# Getting Started

If you want to test most recent changes from the react-md it is ideal to follow the steps below


```bash
$ git clone https://github.com/mlaursen/react-md
$ git clone https://github.com/mlaursen/react-md-docs
$ cd react-md && npm i && npm run build && npm link
# Optionally run this as well if you want live updates
$ npm run scripts:watch

# Documentation repo
$ cd ../react-md-docs && npm i && npm link react-md

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

> Note: The prod server is actually run on apache, not node
