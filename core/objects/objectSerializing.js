/**
 * ES5 provides native functions JSON.stringify() and JSON.parse() to serializing and restore JS objects.
 * Objects, arrays, strings, finite numbers, true,false and null are supported and can be serialized and restored.
 * NaN, Infinity, -Infinity are serialized to null
 * Date objects are serialized to ISO-formatting date strings, but JSON.parse()
 * leaves these in string form and does not restore to original Date object
 * Function, RegExp and Error object and the undefined value cannot be serialized or restored.
 * JSON.stringify() serializes only the enumerable own properties of an object. If a property value can not be serialized
 * that property is simply omitted from output
 **/
var test = {
  test: 'test',
  empty: undefined,
  method: function() {},
  dateProp: new Date(),
  error: new Error('test'),
  regexp: new RegExp(),
  notANumber: NaN
};
var testJson = JSON.stringify(test); //"{"test":"test","dateProp":"2015-08-26T18:54:45.267Z","error":{},"regexp":{},"notANumber":null}"