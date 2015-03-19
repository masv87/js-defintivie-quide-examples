/**
 * string, boolean and number have wrapper object. When you try to refer a property of string.
 * Js convert string to its wrapper object String
 */
var s = "example";
var length = s.length;
/**
 * Once the property has been resolved wrapper object is discarded.
 * So, we can't add own properties to primitive strings, numbers, booleand
 */
var s1 = "example2";
s1.len = 1234;
var strLen = s1.len; //strLen is undefined

/**
 * == equality operator treats a value and its wrapper object as equal, but === equality operator not.
 */
var s2 = '1234';
var s2Obj = new String(s2);
s2 == s2Obj; //true;
s2 === s2Obj; //false
