function runProgram(input) {
    var str = input.trim();
    str = str.split("").sort();
    counting(str);

}

function counting(str) {
    let obj = {};
    for (var i = 0; i< str.length; i++) {
        if(obj[str[i]] == undefined) {
            obj[str[i]] = 1;
        }
        else {
            obj[str[i]]++;
        }
    }
    for (let a in obj) {
       console.log(a + " "+ obj[a]);
    }
}



if (process.env.USERNAME === "admin") {
    runProgram('masaischool');
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function(input) {
        read += input;
    });
    process.stdin.on("end", function() {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function() {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}


var str = "masaischool";
str = str.split("").sort();
var count = 0;
for (var i = 0; i < str.length; i++) {
    for (var j = i+1; j < str.length; j++) {
      if(str[i] == str[j]) {
          count++; 
      }
      
    } 
} 

const fib = (n) => {
    if(n <= 2)
    return 1;
    return fib(n -1) + fib(n -2); 
}

console.log(fib(5));
console.log(fib(6));
console.log(fib(7));
console.log(fib(8));