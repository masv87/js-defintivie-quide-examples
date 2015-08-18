null == undefined; // Null and Undefined Types are strictly equal to themselves and abstractly equal to each other.
null > undefined; //false, because null converts to 0 undefined converts to NaN
null >= undefined; //false, because null converts to 0 undefined converts to NaN
"0" == 0; //true, because   string converts to number before comparing
0 == false; //true boolean converts to number before comparing
"0" == false; //true both converts to number before comparing
undefined == false; //false because undefined converts to Nan and false converts to 0
