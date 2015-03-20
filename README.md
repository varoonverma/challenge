[![Build Status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![License][license-image]][license-url]

# Challenge

A calculator challenge that can be used to determine the whole number of days
between to given dates.

## Installation

You can install this package using [git](http://git-scm.com) and [node](http://nodejs.org).

First, clone the repo using the following

```sh
$ git clone https://github.com/varoonverma/challenge.git
```

And then use node to install the required dependencies.

```sh
$ npm install --global gulp
$ npm install
```

Once all your dependencies have been installed you can interact with the app by
running the following:

```sh
$ node index.js 04/07/1984 25/12/1984
```

This will then output the result to the console. To test the app and ensure that
the results that it is returning are correct, you can run all of the tests by
executing the following:

```sh
$ gulp test
```

If you want to see the code coverage reports for the tests, you can execute:

```sh
$ gulp serve
```

You will then be notified that a web server is running. Open your preferred
browser and navigate to the [following url](http://localhost:3333/lcov-report/index.html).

To stop the web server, return to your console and press `Ctrl+C`.

[travis-image]:    https://img.shields.io/travis/varoonverma/challenge.svg?style=flat-square
[coveralls-image]: https://img.shields.io/coveralls/varoonverma/challenge.svg?style=flat-square
[license-image]:   https://img.shields.io/npm/l/challenge.svg?style=flat-square
[travis-url]:      https://travis-ci.org/varoonverma/challenge
[coveralls-url]:   https://coveralls.io/r/varoonverma/challenge?branch=master
[license-url]:     LICENSE.md
