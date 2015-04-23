/**
 * the + operator behaves like this:
 * 1. If either of operands is an object, it converts it to primitive using object to primitive conversion
 *    describe in objectToPrimitiveConversions.js
 * 2. After object to primitive conversion, if either operands is a string, the other is converted to string and
 *    concatenation is performed
 * 3. Otherwise, both operands are converted to number (or to NaN) and addition is performed
 **/
var a = 1 + 2; //3 addition
var b = "1" + "2"; //12 concatenation
var c = "1" + 2; //12 concatenation
var d = 1 + {}; //1[object object] concatenation after object-to-string
var e = true + true; //2, addition after bool-to-number
var f = 2 + null; //2, addition after null-to-number
var g = 2 + undefined; //NaN, addition after undefined-to-nubmer
var h = 2 + 1 + 'str'; //3str
var i = 2 + (1+'str'); //21str