/**
 * setTimeout and setInterval allow you register a function to be invoked
 * once or repeatedly after a specific amount of time has elapsed
 **/
var alertFn = function() {
  alert(1324);
};
/**
 * setTimeout return a value that can be passed to clearTimeout function to cancel any future invocations
 *
 * @type {number}
 */
var a = setTimeout(alertFn, 1000);
/**
 * If you call setTimeout with a time of 0ms, then the function will be placed on a queue to be invoked
 * as soon as posible after any currently pending event handlers finish running
 * @type {number}
 */
var b = setTimeout(alertFn, 0);

var d = setInterval(alertFn, 10);//Call alertFn every 10 ms

/**
 * You can pass a string as the first arg. to timer functions.
 * If you do this the string will be evaluated (as with eval()) after the interval or timeout
 **/
var e = setTimeout('alert(1234)', 12);

/**
 * The HTML5 specifications allow additional arguments to timer functions.
 * Any such arguments are passed to the function that is invoked
 **/
var f = function(str) {
  alert(str);
}
setTimeout(f, 1000, '1234'):