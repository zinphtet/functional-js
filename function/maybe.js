// Functor

const Maybe = function (value) {
	this.value = value;
};
export const newMaybe = (value) => new Maybe(value);

Maybe.prototype.isNothing = function () {
	return this.value === null || this.value === undefined || this.value === '';
};

Maybe.prototype.map = function (fn) {
	return this.isNothing() ? newMaybe(null) : newMaybe(fn(this.value));
};
