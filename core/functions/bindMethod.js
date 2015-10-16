/**
 * The bind() method was added in ES5.
 * When you invoke the bind() method on a function f and pass an object o, the method returns new function. Invoking the new
 * function (as a function) invokes the original f as a method of o
 * Notes
 *  1. bind() method returns the function object with its length property properly set to the arity of
 *     the bound function minus the number of bound arguments
 *  2. If the function returned by bind() is used as a constructor, the this passed to bind()
 *     is ignored and the original function is invoked as a constructor, with some arguments already bound.
 *  3. Functions returned by the bind() method don't have a prototype property and objects created when this
 *     bound function is used as  constructors inherit from the prototype of the unbound function.
 *  4. Also, bound constructor works just like  the unbound constructor for the purposes of the instanceof operator
 **/
var f = function(x,y) {
  return this.a + x + y;
};
var newF = f.bind({a:2});
newF(3,4);//return 2+3+4=9
/**
 * But the bind() method does more than just bind a function to an object. Any arguments you pass to bind() after the first
 * are bound along with the this value. This is a partial application / currying.
 **/
var newF2 = f.bind({a:2}, 1);
newF2(3);//return 2 +1 +3 = 6. newF2 is a function of 1 argument.