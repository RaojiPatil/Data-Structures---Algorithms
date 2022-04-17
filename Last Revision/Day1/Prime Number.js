
// find prime number in array;
// 1

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var out = "";
var Prime = [];

for(var i = 0; i < arr.length; i++) {
  var n = arr[i];
  var count = 0;
  var index = 0;
  for(var j = 1; j <= n; j++) {
   
  if(n % j == 0) {
  count++;
  index = n;
  }
}if(count == 2) {
  console.log("prime number");
  Prime.push(index);
} else {
  console.log("not a prime");
}
}
console.log(Prime);



// 2

var n = 20;
var arr = [];

for(var i = 0; i < n; i++) {
  if(n % i == 0) {
    arr.push(i);
   
  }
}
// console.log(arr);
var out = "";
var Prime = [];

for(var i = 0; i < arr.length; i++) {
  var n = arr[i];
  var count = 0;
  var index = 0;
  for(var j = 1; j <= n; j++) {
   
  if(n % j == 0) {
  count++;
  index = n;
  }
}if(count == 2) {
Prime.push(index);
}
}
console.log(Prime[Prime.length-1]);




// 3

var a = 7;

for(var i = 1; i <= a; i++) {
  if(a%i == 0) {
    console.log(i);
  }
}