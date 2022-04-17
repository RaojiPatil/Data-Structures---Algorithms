// Prime number;

var n = 3;
var count = 0;
for(var i = 0; i <= n; i++) {
    if(n% i ==0) {
      count++;
    }
}
if(count == 2) {
 console.log("prime number");
} else {
    console.log("not a prime");
}

//

var n = 100;

for(var i = 0; i <= 100; i++) {
    if(n% i ==0) {
     console.log(i);
    }
}
if(count == 2) {
 console.log("prime number");
} else {
    console.log("not a prime");
}


var N = 100;
function isPrime( n) {

	if(n == 1 || n == 0) 
  return false;
	for(var i = 2; i < n; i++) {
		if(n % i == 0)
     return false;
	}
	return true;
}


for(var i = 1; i <= N; i++) {
if(isPrime(i)) {
		console.log( i );
	}
}




var arr1 = [1,2,3,4,5,6];
var arr2 = [1,2,3,4,5,6];
var out = "";
for(var i = 0; i < arr1.length; i++) {
  out = out + (arr1[i]+arr2[i])+ " ";
}
console.log(out);




