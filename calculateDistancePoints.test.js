const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe ('calculateDistancePoints', () => {
	describe('normal', () => {
		it('jump > kPoint', () => {
			const actual = calculateDistancePoints(111, 'normal', 98);
			const expected = 86;

			assert.equal(actual, expected);
		});

		it('jump < kPoint', () => {
			const actual = calculateDistancePoints(95, 'normal', 98);
			const expected = 54;

			assert.equal(actual, expected);
		});

		it('jump = kPoint', () => {
			const actual = calculateDistancePoints(98, 'normal', 98);
			const expected = 60;

			assert.equal(actual, expected);
		});
	});

	describe('large', () => {
		it('jump > kPoint', () => {
			const actual = calculateDistancePoints(134, 'large', 120);
			const expected = 85.2;

			assert.equal(actual, expected);
		});

		it('jump < kPoint', () => {
			const actual = calculateDistancePoints(119.5, 'large', 120);
			const expected = 59.1;

			assert.equal(actual, expected);
		});

		it('jump = kPoint', () => {
			const actual = calculateDistancePoints(120, 'large', 120);
			const expected = 60;

			assert.equal(actual, expected);
		});
	});

	describe('mammoth', () => {
		it('jump > kPoint', () => {
			const actual = calculateDistancePoints(227.5, 'mammoth', 200);
			const expected = 153;

			assert.equal(actual, expected);
		});

		it('jump < kPoint', () => {
			const actual = calculateDistancePoints(170, 'mammoth', 200);
			const expected = 84;

			assert.equal(actual, expected);
		});

		it('jump = kPoint', () => {
			const actual = calculateDistancePoints(200, 'mammoth', 200);
			const expected = 120;

			assert.equal(actual, expected);
		});
	});
});
