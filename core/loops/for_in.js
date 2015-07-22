/**
 Syntax:
  for (variable in object)
    statement
 **/
//Before each iteration  the interpreter evaluates the variable expression and assign the name of the property to it
var a = [], o = {a: 'a', b: 'b'}, i = 0;
for ( a[i++] in o); //this code copy the names of properties o to array a

//Note that the for/in loop does not actually enumerate all properties of an object, only the enumerable properties
//If the body of the loop defines new properties on the object, those properties will generally not enumerated