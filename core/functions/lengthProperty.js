/**
 * Within the body of a function arguments.length specifies the number of arguments that were passed to this function
 * The length property of the function itself, however, has a different meaning.
 * This read-only property returns the number of parameters that the function expects
 **/

/**
 * This function checks count of arguments. If expected count differs from got count than throw Error
 * @param args
 */
function check(args) {
  var actual = args.length,
    expected = args.callee.length;
  if (actual !== expected) {
    throw new Error('Wrong arguments count');
  }
}
var f = function(x,y,z) {
  check(arguments);
  return x+y+z;
};
f(1,2);//throws Error