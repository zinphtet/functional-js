import { map } from '/function/map';
import { Books } from '/function/data';
import { flatArr } from '/function/flatArr';
import { filter } from '/function/filter';
import { reduce } from './function/reduce';
import { zip } from './function/zip';

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
