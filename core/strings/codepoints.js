/**
 * String is immutable ordered sequence of 16-bit values, each of which typically represents a Unicode character.
 * The length of strings is a count of 16-bit values it contains.
 * Js uses UTF-16 encoding of the Unicode character set
 * The most commonly used Unicode characters have codepoints that fit in 16 bits and can be represented as single
 * element of a string. But there are exceptions known as surrogate pair:
 */
var e  = "𝑒"; // e is character with 17 bit codepoint 0x1d452.
e.length; // 2. Utf-16 encoding of e is 16 bit values: "\ud835\udc52"

/**
 * Strings are immutable, so string's methods as toUpperCase return new string
 */
var lower = 'lower';
var upper = lower.toUpperCase();
upper !== lower; //true, because lower still 'lower'


