/**
 * the return value of the ++ operator depends on its position relative to the operand
 * When used before the operand (pre-increment) it increments the operand and evaluates to the incremented value
 * When used after (post-increment) it increments its operand but evalueates to the unincremented value
 **/
var i = 1; j = ++i; //i = 2, j = 2
var a = 1; b = a++; //a = 2; b = 1