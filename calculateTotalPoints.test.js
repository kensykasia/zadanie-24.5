const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
	describe('normal', () => {
		it('Hula Stefan', () => {
			const actual = calculateTotalPoints(111, 'normal', 98, [19, 19.5, 19, 19, 19], 3.2, -14.4);
			const expected = 131.8;

			assert.equal(actual, expected);
		});

		it('Kasai Noriaki', () => {
			const actual = calculateTotalPoints(104.5, 'normal', 98, [18, 18, 18.5, 18.5, 18.5], 0, -14.1);
			const expected = 113.9;

			assert.equal(actual, expected);
		});
	});

	describe('large', () => {
		it('Stoch Kamil', () => {
			const actual = calculateTotalPoints(134, 'large', 120, [19, 20, 19.5, 19, 18.5], 0, -5.4);
			const expected = 137.3;

			assert.equal(actual, expected);
		});

		it('Tepes Jurij', () => {
			const actual = calculateTotalPoints(125, 'large', 120, [18, 18.5, 18, 18.5, 18.5], 0, 1.2);
			const expected = 125.2;

			assert.equal(actual, expected);
		});
	});

	describe('mammoth', () => {
		it('Freund Severin', () => {
			const actual = calculateTotalPoints(227.5, 'mammoth', 200, [18, 18.5, 17.5, 18.5, 18.5], 8.7, -8.4);
			const expected = 208.3;

			assert.equal(actual, expected);
		});

		it('Ammann Simon', () => {
			const actual = calculateTotalPoints(214.5, 'mammoth', 200, [15.5, 15.5, 17, 16.5, 16], 0, -7.1);
			const expected = 178.3;

			assert.equal(actual, expected);
		});
	});
});
