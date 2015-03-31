/**
 * The simplest way to perform explicit type conversion is to use the Boolean(), Number() and Object() functions
 * When this functions invoked without new operator they works as conversion functions
 **/
Number('3'); //3
String(false); //'false'
Boolean([]); //true
Object(3); // new Number(3)
/**
 * Object function does not throw an exception when you pass null or undefined to it. It simply returns newly created empty object
 **/
Object(null); // {}
Object(undefined); // {}

/**
 * Certain JS operators perform implicit type conversions and are sometimes used for the purposes of type conversions
 **/
x + '';// some as String(x)
+x; //some as Number(x)
!!x; //some as Boolean(x)

/**
 * The toString method in Number class accept an optional argument that specifies a radix.
 * You can convert numbers in other bases between 2 and 36
 */
var n = 17;
n.toString(2);
var octalString = '0' + n.toString(8);
var hex_string = '0x' + n.toString(16);

/**
 * The toFixed method in Number class convert number to string with a specified number of digits after the decimal point
 * It never uses exponential notation
 */
var n = 12341324.2534;
n.toFixed(0); // "12341324"
n.toFixed(2); // "12341324.25"

/**
 * The toExponential method converts a number to a string using exponential notation, with one digit before decimal point
 * And specified number of digits after decimal point.
 */
n.toExponential(2); //"1.23e+7"

/**
 * The toPrecision method converts a number to a string with the number of significant digits you specify.
 * It uses exponential notation if the number of significant digits is not large enough to display the entire integer portion of the number
 */
n.toPrecision(2);// "1.2e+7"
n.toPrecision(13); //"12341324.25340"

/**
 * parseInt parses only integer while parseFloat parses both integers and floating-point numbers
 * this functions skips leading white-space parses as many numeric characters as they can and ignore anything that follows
 * If the first character is not part of valid number they returns NaN
 */
parseInt('3 and more words'); //3
parseInt(" 3 and leading white-space"); //3
parseInt('-12.34');//-12
parseInt('0Xff');//255
parseInt('-0Xff');//-255

parseFloat('.1'); //0.1
parseInt('0.1'); //0
parseInt('.1'); //NaN integers can't start with '.'
parseFloat('$123.1'); //NaN floats can't start with '$'

/**
 * parseInt accepts an optional second argument specifying radix (base) of the number to be parsed
 * Legal values are between 2 and 36
 */
parseInt(11,2); //3

/**
 * some JS versions interpret number as octal if they writing with leading zero
 */
var test = parseInt(055); //45
var test2 = parseInt(099); //99
var test3 = 055.toString(); //"45"
var test4 = 088.toString(); //Syntax error