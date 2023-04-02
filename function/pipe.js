import { reduce } from './reduce';

export const pipe =
	(...fns) =>
	(value) =>
		reduce(fns, (acc, fn) => fn(acc), value);
