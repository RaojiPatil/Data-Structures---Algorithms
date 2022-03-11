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