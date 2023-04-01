export const concatAll = (arr, fn) => {
	const result = [];
	for (let val of arr) {
		result.push.apply(result, val);
	}
	return result;
};
