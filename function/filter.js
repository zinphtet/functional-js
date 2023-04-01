export const filter = (arr, fn) => {
	let result = [];
	for (let val of arr) {
		fn(val) ? result.push(val) : undefined;
	}
	return result;
};
