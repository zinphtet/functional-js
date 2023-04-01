export const tap = (value) => {
	return (fn) => {
		typeof fn === 'function' && fn(value);
		// console.log(value);
	};
};
