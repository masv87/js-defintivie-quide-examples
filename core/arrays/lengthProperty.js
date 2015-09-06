/**
 * The length property is greater then  the number of elements
 **/
var a = [1,2]; //a.length is 2
a[2] = 3; //a.length is 3
a.length = 2; //a[2] is undefined
Object.defineProperty(a, 'length', {writable: false});
a[3] = 2;//a is [1,2];
a.length = 1;// a is [1,2];
var b = [1,2,3,4];
/**
 * If you make an array element nonconfigurable it cannot be deleted.  If it cannot be deleted, then the lenght
 * property cannot be set to less than the index of the nonconfigurable element
 */
Object.defineProperty(b, '2', {configurable: false});
b.length = 1;//b is [1,2,3];

var c = [1,2,3,4];
delete c[2];//c length is 3