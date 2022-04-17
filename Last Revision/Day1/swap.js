// using 3rd variable;

var a = 10;
var b= 20;

var temp = a;
a = b;
b = temp;
console.log(a, b);

// arithmetic oprator;

var a = 10;
var b= 20;

a = a + b;
b = a-b;
a = a-b;

console.log(a, b);


// bitwise optrator;

var a = 10;
var b= 20;

a = a^b;
b = a^b;
a = a^b;

console.log(a, b);