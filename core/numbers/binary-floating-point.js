/** floating-point representation in Js is binary representation.
 * It's can exactly represent fractions like 1/2 1/8 1/1024
 * Binary floating representation cannot exactly represent numbers as simple as 0.1
 **/
var a, b;
a = 0.3 - 0.2;
b = 0.2 - 0.1;
a == b; //false
a == 0.1 //false,
b == 0.1// true