'use strict';

var

    checkLeapYear = function (year) {
        var d = new Date(year, 1, 29);
        return d.getMonth() === 1 ? true : false;
    },

    monthMap = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],

    validateTokens = function (tokens) {
        var maxDays,
            day = Number(tokens[0]),
            month = Number(tokens[1]),
            year = Number(tokens[2])
        ;

        if (month <= 12 && month >= 1) {
            if (day <= 31 && day >= 1) {
                if (year <= 2999 && year >= 1901) {
                    if (month === 2) {
                        maxDays = checkLeapYear(year) ? 29 : 28;
                    } else {
                        maxDays = monthMap[month - 1];
                    }
                }
            }
        }
        return tokens[0] <= maxDays;
    },
    /**
     * @description
     * Converts a String into a Number for a given time in milliseconds.
     *
     * @param {String} str - The String to convert to milliseconds.
     *
     * @return {Number}  - The number of milliseconds.
     */
    makeDate = function (str) {
        var pattern = /^\d\d\/\d\d\/\d\d\d\d$/,
            tokens,
            date
        ;

        if (pattern.exec(str) !== null) {
            tokens = str.split('/');
            if (validateTokens(tokens)) {
                date = new Date(tokens[1] + '/' + tokens[0] + '/' + tokens[2]);
            } else {
                console.log('Invalid Date (DD/MM/YYYY): ' + str);
            }
        } else {
            console.log('Date format incorrect (DD/MM/YYYY): ' + str);
        }
        return date;
    };

// Expose to node.
module.exports = makeDate;
