'use strict';

var
    // Pull in our date making library.
    makeDate = require('./makeDate'), x, y, result,

    /**
     * @description
     * Take two arguments and find the number of whole days between them.
     *
     * @param {String} dateOne - The first date to compare.
     * @param {String} dateTwo - The seconds date to compare.
     *
     * @return {Number}  - The number of whole days that are between the dates.
     */
    calculator = function (dateOne, dateTwo) {
        x = makeDate(dateOne);
        y = makeDate(dateTwo);

        if (typeof x !== 'undefined' && typeof y !== 'undefined') {
            var diff = x - y,
                days;

            diff = diff < 0 ? -diff : diff;
            days = diff / (1000 * 60 * 60 * 24);

            result = Math.ceil(days) - 1;
        } else {
            console.log('Invalid Input');
        }
        return result;
    };

// Expose to node.
module.exports = calculator;
