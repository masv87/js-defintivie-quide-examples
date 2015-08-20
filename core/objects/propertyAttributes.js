/**
 * Data properties has four attributes
 *  enumerable
 *  writable
 *  configurable
 *  value
 * Accessor properties don't have a value attribute or a writable attribute: their writability is determined by the presense
 * or a absense of a setter. So, the four attributes for the accessor properties are:
 *  enumerable
 *  configurable
 *  set
 *  get
 * To obtain the property descriptor for a named property of a specified object:
 **/
Object.getOwnPropertyDescriptor({x:1}, 'x'); //returns {value:1, writable: true, enumerable: true, configurable: true}
//Returns undefined for inherited properties and properties that don't exist
Object.getOwnPropertyDescriptor({x:1}, 'y');//undefined;
Object.getOwnPropertyDescriptor({x:1}, 'toString');//undefined, because toString is inherited;

/**
 * To set the attributes of a property, or to create a new property with the specified attributes call Object.defineProperty
 **/
var test = {};
Object.defineProperty(test, 'x', {value: 123, writable: true, enumerable:true, configurable: true});

/**
 * If you want define or modify more than one property at a time, call Object.defineProperties method
 */
var test2 = {x: 1, y: 1};
Object.defineProperties(test2, {
  x: {writable: false},
  y:{enumerable: false}
});

