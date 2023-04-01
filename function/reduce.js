export const reduce = (arr, fn, init = 0) => {
	let accum = init;
	for (let val of arr) {
		accum = fn(accum,val);
	}
	return [accum];
};
