const assert = require('assert');
const Mocha = require('mocha');
//const reporter = require('mocha-junit-reporter');

describe('Simple Math Test', () => {
    it('should return 2', () => {
        assert.equal(1 + 1, 2);
    });
    it('should return 9', () => {
        assert.equal(3 * 3, 9);
    });
});

