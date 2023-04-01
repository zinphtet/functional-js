export const flatArr = (arr) => {
	const result = [];
	for (let val of arr) {
		if (Array.isArray(val)) {
			for (let i = 0; i < val.length; i++) {
				result.push(val[i]);
			}
		} else {
			result.push(val);
		}
	}
	return result;
};
