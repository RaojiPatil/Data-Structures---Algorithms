// Q 1


var n = 5;
var out = 1;

for (var i = 1; i <= n; i++) {
     out = out * i;
}console.log(out);



// resursion  


function f(n) {
    if(n == 0)
    return 0;
    if(n == 1)
    return 1;
    return n * f(n-1);
}

console.log(f(5));