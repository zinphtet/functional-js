import { reduce } from './reduce';

export const compose = (a, b) => (c) => a(b(c));

export const composeN =
	(...fns) =>
	(value) =>
		reduce(fns.reverse(), (acc, fn) => fn(acc), value);
