/**
 * When we use +,  ==, != operations for object,  JS converts its to primitive use special algorithm:
 * The object to primitive conversion is basically and object to number conversion (valueOf() first) for all objects
 * that are not dates, and the object to string conversions (toString() first) for dates
 */
var now = new Date();
typeof (now + 1); //string, + convert date to String
now ==  now.toString(); //true : implicit and explicitl string conversions
/**
 * When we use >, <, >=, <= with object, js converts its use basic algorithm - valueOf() first
 */
var now2 = new Date();
now > (now - 1); //true > converts Date to number