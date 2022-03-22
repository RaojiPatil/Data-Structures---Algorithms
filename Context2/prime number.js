var N = 20;
var arr = [];
for(var i = 0; i < N; i++) {
    if(N % i == 0) {
       arr.push(i);
    }

}

const isPrime = n => {
    if (n===1){
    return false;
    }else if(n === 2){
       return true;
    }else{
       for(let x = 2; x < n; x++){
          if(n % x === 0){
             return false;
          }
       }
       return true;
    };
 };
 const filterPrime = arr => {
    const filtered = arr.filter(el => isPrime(el));
    return filtered;
 };
arr = arr.length-1;
 console.log(filterPrime(arr));