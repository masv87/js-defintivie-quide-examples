/**
 * In ECMAScript 5 the value attribute of property may be replaced by one of two methods, known as getter and setter
 * Property defined by getter and setter known as accessor properties to distinguish them from data properties that have
 * a simple value
 **/
var test = {
  foo: 1,
  get bar(){return this.foo},
  set bar(value){this.foo = value}
};

