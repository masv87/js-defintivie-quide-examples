/**
 * JS functions are executed using the scope chain that was in effect when they were defined
 *
 */
var scope = 'global scope';
var test = function() {
  var scope = 'local scope';
  var outerFunction = function() {
    console.log(scope);
  }
  return outerFunction;
};
test()();// print 'local scope'