'use strict';

// TODO - Complete this logic

var
    // Pull in any args that may have been passed in.
    args = require('./args'),

    // Pull in our calculator lib.
    calculator = require('./calculator'),

    // Determine teh difference between the two dates.
    result = calculator(args[0], args[1]);

// Expose to node.
module.exports = result;
