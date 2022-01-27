

function runProgram(input){
input = input.trim().split("\n");

var n = +input[0];
var line = 2;
var arr = input[1].split(" ").map(Number);
for(var i = 0; i < n; i++) {
    var q = input[line++];
       shop(q);
}

var out = 0;
function shop(arr, q) {
for(var i = 0; i < arr.length; i++) {
    if(arr[i] < q) {
        out++;
    }
 }console.log(out)
} 

}

if (process.env.USERNAME === "Ash") {
    runProgram("5\n1 4 10 5 6\n4\n2\n3\n5\n11");
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


// var arr = [1,4,10,5,6];
// var q = 4;
// var q = 5;
// var out = "";
// for(var i = 0; i < arr.length; i++) {
//     if (arr[i] < q) {
//         out = out + arr[i];
//     }else{
//         out = out + "";
//     }
    
    
// }console.log(out);

//

// var arr= [11, 13, 21, 3];
// var n = arr.length;
// var q = 15;

// function printNSE(arr, n)
// {
// 	var next, i;
// 	for (i = 0; i < n; i++) {
// 		next = 0;
// 			if (arr[i] > q) {
// 				next = arr[i];
// 				break;
// 			}
// 		console.log(next);
// 	}
// }

// printNSE(arr, n);

// var arr = [1,4,10,5,6];
// var q = 7;
// var out = 0;

// for(var i = 0; i < arr.length; i++) {
//     if(arr[i] < q) {
//         out++;
//     }
// } console.log(out);

