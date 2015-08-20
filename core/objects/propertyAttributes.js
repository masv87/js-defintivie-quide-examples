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
/**
 * Calls to Object.defineProperty or Object.defineProperties that attempt to violate them throw TypeError
 */

//If object not extensible, you can edit existing properties, but you can't add new properties to it.
var notExtensible = {test:1};
Object.preventExtensions(notExtensible);
notExtensible.test2 = 12;//Allowed, but do nothing
Object.defineProperty(notExtensible, 'test2', {value:123});//throw Error

//If property is not configurable, you can not change its configurable and enumerable attributes
var notConfigurable = Object.create(Object.prototype, {x: {configurable: false, value:123}});
Object.defineProperty(notConfigurable,'x', {enumerable: false, configurable: true}); //Throw TypeError

//If an accessor  property is not configurable, you can't change its getter or setter method, and you can't change it to data property
var notConfigurableAccessor = Object.create(Object.prototype, {
  x: {
    get: function() {return 123},
    set: function(value) {console.log(123)},
    configurable: false
  }
 });
Object.defineProperty(notConfigurableAccessor, 'x', {set :function(value) {alert('ok')}}); // throw TypeError

//If a data property is not confgurable, you can't change it to an accessor property
var notConfigurableData = Object.create(Object.prototype, {
  x: {
    value: 1234,
    configurable: false
  }
});
Object.defineProperty(notConfigurableData, 'x', {set :function(value) {alert('ok')}}); // throw TypeError


//if a data property is not configurable, you can't change it writable attribute from false to true, but you can change it from true to false
var notConfigurableData2 = Object.create(Object.prototype, {
  x: {
    value: 1234,
    writable: false,
    configurable: false
  }
});
Object.defineProperty(notConfigurableData2, 'x', {writable: true}); // throw TypeError

//If a data property is not configurable and not writable you can't change its value. You can change the value of a property that is configurable but not writable
var notConfigurableData3 = Object.create(Object.prototype, {
  x: {
    value: 1234,
    writable: false,
    configurable: false
  }
});
Object.defineProperty(notConfigurableData3, 'x', {value: 3}); // throw TypeError


