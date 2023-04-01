export const every = (arr, fn) => {
	let result = true;
	for (let i = 0; i < arr.length; i++) {
		result = result && fn(arr[i]);
	}
	return result;
};
