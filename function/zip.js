export const zip = (leftArr, rightArr, fn) => {
	const result = [];
	for (let i = 0; i < Math.min(leftArr.length, rightArr.length); i++) {
		result.push(fn(leftArr[i], rightArr[i]));
	}
	return result;
};
