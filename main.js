import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.js';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Learning FP with JS</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector('#counter'));

const forEach = (arr, fn) => {
	for (let i = 0; i < arr.length; i++) fn(arr[i]);
};

const forEachObj = (obj, fn) => {
	for (let prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			fn(obj[prop]);
		}
	}
};

const unless = (predicate, fn) => {
	if (!predicate) fn();
};

// calling forEach
// forEach([1, 2, 3, 4, 5], (num) => {
// 	unless(num % 2 != 0, () => console.log(num));
// });

const Times = (time, fn) => {
	for (let i = 0; i < time; i++) {
		fn(i);
	}
};
const myFun = (num) => {
	unless(num % 2 === 0, () => console.log(num));
};
// my function
// Times(50, myFun);

const every = (arr, fn) => {
	let result = true;
	for (let i = 0; i < arr.length; i++) {
		result = result && fn(arr[i]);
	}
	return result;
};

// console.log(`Every ${every([NaN, NaN, NaN], isNaN)}`);
// console.log(`Every ${every([12, -100, 45], Number.isInteger)}`);
// console.log(`Every ${every(['hello', -100, 45], Number.isInteger)}`);

const some = (arr, fn) => {
	let result = false;
	for (let i = 0; i < arr.length; i++) {
		result = result || fn(arr[i]);
	}

	return result;
};

// console.log(`Some ${some([1, 2, 3, 4], isNaN)}`);
// console.log(`Some ${some([1, 2, 3, 'hello'], Number.isInteger)}`);
// console.log(`Some ${some([1, 2, 3, 4], isNaN)}`);

let people = [
	{ firstname: 'aaFirstName', lastname: 'cclastName' },
	{ firstname: 'ccFirstName', lastname: 'aalastName' },
	{ firstname: 'bbFirstName', lastname: 'bblastName' },
];

const comparator = (a, b) => {
	return a.firstname < b.firstname ? -1 : a.firstname > b.lastname ? 1 : 0;
};

const sortBy = (prop) => {
	return (a, b) => {
		return a[prop] < b[prop] ? -1 : a[prop] > b[prop] ? 1 : 0;
	};
};
people.sort(sortBy('lastname'));

// console.log(people);
