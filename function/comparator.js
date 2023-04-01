export const comparator = (a, b) => {
	return a.firstname < b.firstname ? -1 : a.firstname > b.lastname ? 1 : 0;
};
