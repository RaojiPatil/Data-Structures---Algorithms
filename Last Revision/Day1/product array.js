// 1

var arr = [10, 3, 5, 6, 2];
var out = "";
var prod = 1;

for(var i = 0; i < arr.length; i++) {
  prod = prod * arr[i];
}
console.log(prod)
for(var i = 0; i < arr.length; i++) {
    out = out + prod/arr[i] + " ";
}
console.log(out);


// 2 brouth fource method 

var arr = [10, 3, 5, 6, 2];
var product = [];

for(var i = 0; i < arr.length; i++) {
  var out = 1;
  for(var j = 0; j < arr.length; j++) {
     if(i != j) {
      out = out * arr[j];
        }
        
    } product.push(out);
}
console.log(product);


// 3 


var arr = [10, 3, 5, 6, 2];
var out = "1 ";
var prod = 1;
var out1 = "1 ";
var prod1 = 1;
var out2 = "";
for(var i = 0; i < arr.length-1; i++) {
   prod = prod * arr[i];
   out = out + prod + " ";
}
console.log(out);
for(var i = arr.length-1; i > 0; i--) {
    prod1 = prod1 * arr[i];
    out1 = out1 + prod1 + " ";
 }
console.log(out1);

for(var i = 0; i < arr.length; i++) {
    out2 = out2 + (out* out1);
}
console.log(out2);