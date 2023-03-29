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

console.log('hello');

forEach([1, 2, 3, 4, 5], (num) => console.log(num));
