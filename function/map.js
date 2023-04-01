export const map = (arr, fn) => {
	let result = [];
	for (let value of arr) {
		result.push(fn(value));
	}

	return result;
};
