'use strict';

var
    makeDate = require('../../lib/makeDate');

describe('converting a String to a date Object', function () {

    it('should be able to convert a String to a Number', function () {
        expect(makeDate('3')).toEqual(3);
    });

});
