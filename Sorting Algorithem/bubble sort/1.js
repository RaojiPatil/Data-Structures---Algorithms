// Bubble shot algorithem;

// Time Complicity 
// Best O(n);
// Average o(n^2);
//Worst  o(n^2);

/* Bubble Sort is based on the idea of repeatedly comparing pairs of adjacent
   elements and then swapping their positions if they are in the wrong order.
    Bubble sort is a stable, in-place sort algorithm.
*/ 

var arr = [8,0,4,6,3];
var n = arr.length;

for (var i = 0; i < n; i++) {
    for (var j = 0; j < (n-i); j++) {
        if (arr[j] > arr[j+1]) {
            var temp = arr[j];
            arr[j] = arr[j+1];
        arr[j+1] = temp;
        }
    }
}console.log(arr.join(" "));

//




function runProgram(input) {
    var input = input.split("\n");

    var size = +input[0];
    var line = 1;
    var arr = input[line++].split(" ").map(Number);


    var n = arr.length;

    for (var i = 0; i < n; i++) {
        for (var j = 0; j < (n - i); j++) {
            if (arr[j] > arr[j + 1]) {
                var tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }
        }
    }
    console.log(arr.join(" "));

}

if (process.env.USERNAME === "Ash") {
    runProgram('5\n4 3 6 0 8');
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




var arr = [8,0,4,6,3];
console.log(arr.sort().join(" "));