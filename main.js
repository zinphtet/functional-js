import { map } from '/function/map';
import { Books } from '/function/data';
import { flatArr } from '/function/flatArr';
import { filter } from '/function/filter';
import { reduce } from './function/reduce';
import { zip } from './function/zip';
import { curry, curry2 } from './function/curry';
const filtered = map(
	filter(
		flatArr(map(Books, (book) => book.bookDetails)),
		(book) => book.rating[0] > 4.2
	),
	({ title, author }) => ({ title, author })
);
// console.log(filtered);

const reduced = reduce([1, 2, 3, 4, 5, 6], (accum, val) => (accum += val * 5));
// console.log(reduced);

// This is Great
const goodReview = reduce(
	flatArr(map(Books, (book) => book.bookDetails)),
	(accum, { reviews }) => {
		if (reviews[0]?.good) {
			accum.good += reviews[0].good;
		}
		if (reviews[0]?.excellent) {
			accum.excellent += reviews[0].excellent;
		}
		return {
			good: accum.good,
			excellent: accum.excellent,
		};
	},
	{ good: 0, excellent: 0 }
);
// console.log(goodReview);

const zippedArr = zip([1, 2, 3], [10, 20, 30, 40], (a, b) => a + b);
// console.log(zippedArr);

// curry

const value = curry((a, b) => a * b)(3)(5);
// console.log(value);

const genTable = (x, y) => x * y;

const table2 = curry(genTable)(2);
const table3 = curry(genTable)(3);

// console.log(table2(3));
// console.log(table3(4));

const curryArgs = curry2((a, b, c) => a * b + c)(10, 20, 500);
// console.log(curryArgs);

const multiply = curry2((x, y, z) => x * y * z);

// console.log(multiply(12, 2, 3));

// console.log(multi(2)(3));

const logger = (mode, msg, line) => {
	if (mode === 'ERROR') {
		console.error(`${msg} at line ${line}`);
	}
	if (mode === 'WARN') {
		console.warn(`${msg} at line ${line}`);
	}
	if (mode === 'DEBUG') {
		console.info(`${msg} at line ${line}`);
	}
};

const curry3 = (fn) => {
	return (mode) => {
		return (...args) => {
			return fn.apply(null, [mode, ...args]);
		};
	};
};

const errLogger = curry3(logger)('ERROR');
const wrnLogger = curry3(logger)('WARN');
const debugLogger = curry3(logger)('DEBUG');

// errLogger('cannot find that', 24);
// wrnLogger('this might be error next time', 34);
// debugLogger('this is something useful', 37);
