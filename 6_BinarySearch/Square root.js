var n = 625;                                               // O(n);

function squareroot(n) {
    for(var i = n-1; i > 0; i--) {
     if(i * i === n) {
     return i;
     }
    } 
}
console.log(squareroot(n));


