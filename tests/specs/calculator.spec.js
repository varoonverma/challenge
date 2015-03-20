'use strict';

var
    calculator = require('../../lib/calculator');

describe('subtraction', function () {

    it('should be able to subtract two numbers from one another', function () {
        expect(calculator(3, 2)).toEqual(1);
    });

});
