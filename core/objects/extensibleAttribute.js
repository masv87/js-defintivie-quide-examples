/**
 * The extensible attribute specifies whether new properties can be added to the object or not
 * In ES3 all built-in and user-defined objects are implicitly extensible, and the
 * extensibility of host object is implementation defined.
 * In ES5 all built-in and user-defined objects are implicitly extensible unless they have been converted to be nonextensible.
 * Extensibility of host object is again implementation defined.
 **/
var test = {};
Object.isExtensible(test); //check is the object extensible or not (es5)
/**
 * To make an object nonextensible, pass it to Object.preventExtensions()
 * Note, that there is no way to make an object extensible again once you have made   it nonextensible
 * Also note that calling preventExtensions only affects object itself not it prototype.
 **/
var Test = function(){};
var parent = {x:1, constructor: Test};
Test.prototype = parent;
var child  = new Test();
Object.preventExtensions(child);
parent.y = 1;
child.y === 1; //ture, because we changed prototype object

/**
 * Object.seal() works like Object.preventExtensions(), but in addition to making an object nonextensible it alo
 * make all of the  own properties of that object non-configurable.
 */
var testSeal = {x:1};
Object.seal(testSeal);
delete testSeal.x; //false
Object.isSealed(testSeal);//true

/**
 * Object.freeze() locks object more tightly. In addition to making the object nonextensible and its properties nonconfigurable
 * it also makes all of the object's own data properties read-only.
 * If the object has accessor properties  with setter methods there are not affected and
 * can still be invoked by assignment to the property
 **/
var testFreeze = {x:1, set y(value) {console.log(value)}, get y() {return this.x}};
Object.freeze(testFreeze);
testFreeze.y = 2;
testFreeze.x = 2;
testFreeze.x === 2; //false;
Object.isFrozen(testFreeze);//true
