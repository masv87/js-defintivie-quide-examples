/**
 * ECMAScript5 defines a method, Object.create, that creates a new object, using its first argument as the prototype of that object.
 * Optional second argument describes the properties of the new object.
 * This method is a static function
 **/
var test = Object.create({test: 'test'});
var nilObj = Object.create(null); //nilObj inherits no methods and props
//If you want create an ordinary empty  object:
var emptyObj = Object.create(Object.prototype);
var testObj = Object.create(Object.prototype, {x: {writable: true, enumerable: false, configurable: true}});