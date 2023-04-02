export const curry = (binaryFn) => {
	return (fArg) => {
		return (sArg) => {
			return binaryFn(fArg, sArg);
		};
	};
};

export const curry2 = (fn) => {
	if (typeof fn !== 'function') {
		throw new Error('Provided Argument is not function');
	}

	return (...args) => {
		return fn.apply(null, args);
	};
};
