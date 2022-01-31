// var arr = [1, 2, 4, 3, 5, 8];
// var count = 0;
// for (var i = 0; i < arr.length; i++) {
//         if(arr[i] > arr[i+1]) {
//             count++;
//     }
// }
// console.log(count);



function runProgram(input) {
    var input = input.trim().split("\n");
   var text = +input[0];
    var arr = input[1].split(" ").map(Number);


    var count = 0;
for (var i = 0; i < arr.length; i++) {
        if(arr[i] > arr[i+1]) {
            count++;
    }
}
console.log(count);

}


if (process.env.USERNAME === "admin") {
    runProgram('6\n1 2 4 3 5 8');
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



// 2


function runProgram(input) {
    var input = input.trim().split("\n");
   var [n, t] = input[0].split(" ").map(Number);
   var line = 1;
    var arr = input[line++].split(" ").map(Number);
    for(var i = 0; i < t; i++) {
        var [a, b, c] = input[line++].split(" ").map(Number);
        console.log(frequencebetweenpro(arr, a, b, c));
    }
}




function frequencebetweenpro(arr, a,b,c) {
    let count = 0;
    for(var i = a-1; i < b; i++) {
       if(arr[i] == c) {
           count++;
       }
    }
  return count;
   
} 

if (process.env.USERNAME === "admin") {
    runProgram('6 2\n1 5 3 2 3 2\n3 6 2\n4 4 2');
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


//




function runProgram(input) {
    var input = input.trim().split("\n");
   var t = input[0];
   for(var i = 0; i < t; i++) {
   var line = 1;
   var n = input[line++];
    for(var i = 0; i < n; i++) {
        var [a, b] = input[line++].split(" ").map(Number);
        console.log(a, b);
    }
}
}




if (process.env.USERNAME === "admin") {
    runProgram('2\n3\n4 3\n1 4\n3 2\n5\n5 6\n4 3\n1 2\n7 5\n3 4');
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


