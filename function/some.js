export const some = (arr, fn) => {
	let result = false;
	for (let i = 0; i < arr.length; i++) {
		result = result || fn(arr[i]);
	}

	return result;
};
