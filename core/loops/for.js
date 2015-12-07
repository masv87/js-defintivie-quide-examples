/**
 Syntax:
  for (initialize; test; increment)
    statement
 **/
for(var count = 0; count < 10; count++)
  console.log(count);

// Loops can became a lot more complex than this simple example:
var i, j, sum;
for (i = 0, j = 10; i < 10, j>0; i++, j--) {
  console.log('i: ' + i);
  console.log('j: ' + j);
  sum += i*j;
}
// Any of three expression (initialize, test, increment) can be omitted
/**
 * This code return the last object in the linked list (i.e the first object that does not have a next property)
 * @param o
 * @returns {*}
 */
function tail(o) {
  for (; o.next; o = o.next) {};
  return o;
}

for(;;);//another way of writing infinity loop, like while(true)