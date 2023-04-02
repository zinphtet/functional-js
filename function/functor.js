export const Container = function (value) {
	this.value = value;
};

export const createContainer = (value) => new Container(value);

Container.prototype.map = function (fn) {
	this.value = fn(this.value);
	return this;
};
