import { map } from '/function/map';
import { Books } from '/function/data';
import { flatArr } from '/function/flatArr';
import { filter } from '/function/filter';
import { reduce } from './function/reduce';
import { zip } from './function/zip';
import { curry, curry2 } from './function/curry';
import { partial } from './function/partial';
import { compose, composeN } from './function/compose';
import { books } from './function/data';
import { pipe } from './function/pipe';
import { Container, createContainer } from './function/functor';
import { newMaybe } from './function/maybe';

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

let delayTenMs = partial(setTimeout, undefined, 1000);
// delayTenMs(() => {
// 	console.log('hello');
// });

const obj = {
	name: 'mgmg',
	age: 12,
};

const stringObj = JSON.stringify(obj, null, 2);
// console.log(stringObj)

const stringObjUsingPartial = partial(JSON.stringify, undefined, null, 2);
// console.log(stringObjUsingPartial(obj));

const add = (a) => a + 12;
const multi = (a) => a * 5;

// console.log(compose(multi, add)(3));

// const titleAuthor = compose(map)

// console.log(compose(Math.round, parseFloat)('12.2'));

const filterBestBooks = partial(
	filter,
	undefined,
	(book) => book.rating[0] >= 4.5
);
const projectAuthorAndTitle = partial(map, undefined, ({ author, title }) => ({
	author,
	title,
}));
const projectTitle = partial(map, undefined, ({ title }) => ({
	title,
}));
const authorAndTitle = compose(projectTitle, filterBestBooks);

const authorAndTitleForBestBooks = authorAndTitle(books);
// console.log(authorAndTitleForBestBooks);

// compose n number of function

const splitWords = (str) => str.split(' ');
const countWords = (arr) => arr.length;
const evenOrOdd = (num) => (num % 2 === 0 ? 'even' : 'odd');

const GivenStrEvenOrOdd = composeN(
	evenOrOdd,
	countWords,
	splitWords
)('Nann Phyo Htay Kywe Hola');

// console.log(GivenStrEvenOrOdd);

const CountWordss = composeN(countWords, splitWords);
const EvOd = composeN(evenOrOdd, CountWordss)('This Is The Best');

// console.log(EvOd);

const result = pipe(splitWords, countWords, evenOrOdd)('This is Strange');
// console.log(result);

const value1 = new Container(5);
// console.log(value1);

// const value2 = new Container(100)

const value2 = createContainer(200);
// console.log(value2);

const value3 = createContainer(createContainer(500));

// console.log(value3)

// let double = (x) => x * 2;
// const value4 = createContainer(800).map(double).map((x)=>x/2)
// console.log(value4)

const maybe1 = newMaybe('zinpaing')
	.map((value) => value.toUpperCase())
	.map((v) => 'Mr .' + v);

// console.log(maybe1);

const maybe2 = newMaybe('200')
	.map(() => undefined)
	.map((value) => Number(value));

// console.log(maybe2);

const fetchUsers = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const data = await res.json();
	console.log(typeof data);
	const value = newMaybe(data).map((value) => {
		if (!value.length || value.length === 0) {
			return null;
		}
		return map(value, ({ address, name, email }) => ({ address, email, name }));
	});

	console.log(value);
};

fetchUsers();
