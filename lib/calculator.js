'use strict';

var
    // Pull in our date making library.
    makeDate = require('./makeDate'),

    /**
     * @description
     * Take two arguments and find the number of whole days between them.
     *
     * @param {String} x - The first date to compare.
     * @param {String} y - The seconds date to compare.
     *
     * @return {Number}  - The number of whole days that are between the dates.
     */
    calculator = function (x, y) {

        // TODO - Do the actual logic from subtracting the two dates.

        x = makeDate(x);
        y = makeDate(y);

        return x - y;

    };

// Expose to node.
module.exports = calculator;
