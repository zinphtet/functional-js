export const Container = function (value) {
  this.value = value;
};

export const createContainer = (value) => new Container(value);

Container.prototype.map = function (fn) {
  this.value = fn(this.value);
  return this;
};

// Nothing

const Nothing = function (value) {
  this.value = value;
};

export const createNothing = (value) => new Nothing(value);

Nothing.prototype.map = function (fn) {
  return this;
};

// Some
const Some = function (value) {
  this.value = value;
};
export const createSome = (value) => new Some(value);

Some.prototype.map = function (fn) {
  return new Some(fn(this.value));
};

export const Either = {
  Some: Some,
  Nothing: Nothing,
};



