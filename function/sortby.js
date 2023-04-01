export const sortBy = (prop) => {
	return (a, b) => {
		return a[prop] < b[prop] ? -1 : a[prop] > b[prop] ? 1 : 0;
	};
};
