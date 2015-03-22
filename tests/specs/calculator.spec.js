'use strict';

var
    calculator = require('../../lib/calculator');

describe('Date Difference', function () {

    it('should be able to find date difference', function () {
        expect(calculator('02/06/1983', '22/06/1983')).toEqual(19);
        expect(calculator('04/07/1984', '25/12/1984')).toEqual(173);
        expect(calculator('03/01/1989', '03/08/1983')).toEqual(1979);
    });
});
