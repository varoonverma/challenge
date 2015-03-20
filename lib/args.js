'use strict';

/*!
 * Instead of calling `process.argv` inside of `lib/challenge.js`, we instead
 * define this module. We do this so that in `tests/specs/challenge.spec.js` we
 * are able to mock out the potential args that could be passed in.
 */

// Expose to node.
module.exports = process.argv.slice(2);
