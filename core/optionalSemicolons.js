/**
 * In JS you can omit the semicolon between 2 statements if those statements are written on separate lines
 */
a = 1 //semicolon not required
b = 2;

a = 1; b = 2; // first semicolon required

/**
 * js treat line break as semicolon if they it can't parse the code without semicolon
 */
var a
a
=
2

/**
 * js interprets code above as:
 */
var a; a = 2;

/**
 * this rules can lead to some surprising cases
 */
var y = x + f
  (a+b).toString();
/**
 * js interprets code above as:
 */
var y = x + f(a+b).toString();

/**
 * if statement begins with [,(,+,-/ there is a chance that this interpreted as continuation of the statement before :
 */
var x = 1
[x, x + 1, x + 2].forEach(console.log());
/**
 * js interprets code above as:
 */
var x = 1[x, x+1, x+2].forEach(console.log());

/**
 *There is two exceptions to the rule above. First: return, continue, break.
 */

return
  true
/**
 * js interprets code above as:
 */
return;
true;

/**
 * Second exception is ++ and -- operators
 */
x
++
y
/**
 * js interprets code above as:
 */
x; ++y;
