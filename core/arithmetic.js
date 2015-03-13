/**
 * arithmetic in JS not rise error in cases of overflow, underflow or division by zero
 */
var a = Number.MAX_VALUE + 1; //when numeric result is larger than the largest representable number, the result in Infinity
var b = -Number.MAX_VALUE -1; //when numeric result is smaller than the smallest representable negative number, the result in -Infinity
var c=a/b; //Infinity. So, all operations with infinity produce Infinity too
var d = Number.MIN_VALUE/2; //underflow - d === 0
var e = -Number.MIN_VALUE/2; //underflow too  e === -0
var f = 1/0; // f is Infinity. When not 0 numeric divide by 0 it produce Infinity
var g = 0/0; // But g is NaN (not a number)  - is exception of rule above


//NaN does not compare equal to any values including itsel
var bool = NaN === NaN // false;
var bool2 = isNaN(NaN);//true
var bool3 = isNaN('asdf');//true
var x;
x = 0/0;
var bool4 = x !== x; //this expression will be true if, and only if x is NaN.

