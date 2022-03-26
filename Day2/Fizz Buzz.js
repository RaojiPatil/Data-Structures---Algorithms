var n = 10; 
var arr = "";

for(var i = 1; i <= n; i++) {
    if(i % 3 == 0) {
        arr = arr + ("Fizz") + " ";
    } else if (i % 5 == 0) {
        arr = arr + ("Buzz") + " ";
    } else {
        arr = arr + i + " ";
    }
}

console.log(arr);