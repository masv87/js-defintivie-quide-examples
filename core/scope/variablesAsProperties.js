/**
 * If you use var to declare the variable,
 * the property that is created are nonconfigurable
 * so, we can't delete it by delete operator
 */
var truevar = 1;//a properly declared global variable, nondeletable
/**
 * If you're not using strict mode and you assign a value to and undefined variable, Js
 * automatically creates a global variable for you. This variable is regular, configurable property of the global object
 * and the can be deleted
 */
fakevar = 2;//creates a deletable property of global object
this.fakevar2 = 3;  //this does the same thing

delete truevar; //false , variable not deleted
delete fakevar; //true, variable deleted
delete this.fakevar2; //true, variable deleted