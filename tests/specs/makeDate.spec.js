'use strict';

var
    makeDate = require('../../lib/makeDate');

describe('converting a String to a date Object', function () {

    it('should be able to convert a String to a Date', function () {
        var date = new Date('12/11/2014');
        expect(makeDate('11/12/2014')).toEqual(date);

        var date = new Date('02/29/2000');
        expect(makeDate('29/02/2000')).toEqual(date);
    });

    it('should not parse invalid date', function () {
        expect(makeDate('02/29/2002')).toEqual(undefined);
    });

    it('should not parse date out of valid boundary [1901 - 2999]', function () {
        expect(makeDate('12/31/1900')).toEqual(undefined);
    });

    it('unparsable date', function () {
        expect(makeDate('hello world')).toEqual(undefined);
    });
});
