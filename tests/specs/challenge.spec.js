'use strict';

var
    proxyquire = require('proxyquire'),
    mockedChallenge1 = proxyquire('../../lib/challenge', {
        './args': require('../fixtures/args1')
    });

describe('cli', function () {

    it('should be able to subtract two numbers that are passed in from the command line', function () {
        expect(mockedChallenge1).toEqual(3);
    });

});
