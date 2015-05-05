var myEval = eval;
var a = 'global', b = 'global';
/**
 * In this case eval used as is, without changing the name;
 * @returns {string}
 */
function localEval() {
  var a = 'local';
  eval("a += 'changed';"); //this code change the local variable "a"
  return a;// and return it
}
/**
 * In this case we use eval with changing name
 * @returns {string}
 */
function globalEval() {
  var b = 'global';
  myEval("b += 'changed';"); //this code change the global variable "b";
  return b;//and return unchanged local variable
}

/**
 * In strict mode ECMA5Script eval does a local eval with a private variable environment:
 * evaluated code can query and set local variables but it can not define new variables   of functions in local scope
 */
var f = function() {
  var x = 12; eval("'use strict'; var y = x + 1" );
  return y;//Uncaught ReferenceError: y is not defined
};