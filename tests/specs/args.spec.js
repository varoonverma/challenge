'use strict';

var
    args = require('../../lib/args');

describe('args', function () {

    it('should be an Array', function () {
        expect(Array.isArray(args)).toBe(true);
    });

});
