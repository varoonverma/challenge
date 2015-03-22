'use strict';

var
    proxyquire = require('proxyquire'),
    mockedChallenge1 = proxyquire('../../lib/challenge', {
        './args': require('../fixtures/args1')
    });

describe('cli', function () {
});
