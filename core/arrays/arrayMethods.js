var a = [1,2,3];
a.join(';'); //1;2;3
a.reverse(); // a is [3,2,1];

var b = [1111, 3333, 4444,222];
b.sort(); //b is [1111,222,333,444]; alphabetical order
a.sort(function(a,b) { // a is [3,2,1] reverce numerical order
  return b-a;
});

var c = [1,2,3];
c.concat(4,5); //returns [1,2,3,4,5], but c is unchanged;
c.concat([2,1]); // returns [1,2,3,2,1]
c.concat([2,[1,1,1]]); // returns [1,2,3,2,[1,1,1]]

var d = [1,2,3,4,5];
d.slice(0,3); // return [1,2,3], but d is unchanged;
d.slice(1,-1); //return [2,3,4,5);
d.slice(-3,-2); //return [3]

var e = [1,2,3,4,5];
e.splice(0,2); //return [1,2], e is [3,4,5];
e.splice(-1,0, 1,2,[6,7], 8);// return [], e is [3,4,1,2,[6,7],5]

//ES5 array methods

var f = [1,2,3,4];
f.forEach(function(value) { //f is [2,3,4,5]
  value += 1;
});

var g = [1,2,3,4];
g.map(function(value) {//g is the same, map return [1,4,9,16]
  return value*value;
});

var i = [1,2,3,4];
i.filter(function(value) {// i is the same, filter return [2,,4]
  return value % 2 === 0;
});

i.every(function(value) { // return true
  return value > 0;
});

i.some(function(value) { // return true
  return value === 1;
});

i.reduce(function(x,y) {// return 10
  return x + y;
});

i.reduce(function(x,y) {// return 12, because second argument specifies init value for operation described is function
  return x + y;
}, 2);
//reduceRight works like reduce(),expect that it process the array from right to left

i.indexOf(1); //return 0;
i.indexOf(18); //return -1
i.push(1);
i.lastIndexOf(1); //return 4