/**
 * An object's prototype attribute specifies the object from which it inherits properties
 * Important to understand that when prototype appears in code font, it refers to an ordinary object property,not to the
 * prototype attribute
 * Object created from object literals use Object.prototype as their prototype
 * Object create with new use the value of the prototype property of their constructor function as their prototype
 * And object created by Object.create use the first argument to that function as their prototype
 **/

//In ECMAScript5 you can query the prototype of any object by passing that object to Object.getPrototypeOf
var parent = {test:1};
var obj = Object.create(parent);
var test = Object.getPrototypeOf(obj) === parent ; // true
/**
 * There is no equivalent in for this function is ECMAScript3, but is often possible to determine
 * the prototype of an object o using the expression o.constructor.prototype.
 * Objects created by New expression of a function f  inherit a constructor property that refers
 * to the f.prototype.constructor that normally refers to the function f (if we didn't manually changed f.prototype)  used to create it.
 * And  constructor functions have a prototype property that specifies the prototype for objects created
 * using this constructor.
 * NOTE that objects created by object literals or by Object.create have a constructor property
 * that refers to the Object() constructor. Thus, constructor.prototype refers to the correct prototype for object literals,
 * but does not usually do so for objects created with Object.create();
 *
 */
var func = function() {};
var testConstructor = func.prototype.constructor === func; //true;
var func2 = function() {};
func2.prototype = {x:1};
var testConstructor2 = func2.prototype.constructor === func; //false


  var TestFunction1  = function() {};
  var parentObject1 = {x:1};

  TestFunction1.prototype = parentObject1;
  var sun1 = new TestFunction1();
var result1 = sun1.constructor.prototype === Object.getPrototypeOf(sun1); // false, because sun1.constructor === parentObject1.constructor


var TestFunction  = function() {};
var parentObject = {x:1, constructor: TestFunction};

TestFunction.prototype = parentObject;
var sun = new TestFunction();
var result = sun.constructor.prototype === Object.getPrototypeOf(sun); // true

var testObj = Object.create(parentObject1);
var result2 = testObj.constructor.prototype === parentObject1; //false
var result3 = testObj.constructor.prototype === Object.prototype; //true

