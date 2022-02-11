var arr = [3, 10, 4, 4];
var w = 20;
var out = 0;
var count = 0;
arr.sort((a, b) => {return (a-b)});

for (var i = 0; i < arr.length; i++) {
    out = out + arr[i];
if(out <= w) {
   count++;
}if(out > w) {
    arr
}
}
console.log(count);





function runProgram(input) {
 var input = input.trim().split("\n");
 var size = input[0];
 var line = 1;
 for(var i = 0; i < size; i++) {
     var [n, m] = input[line++].split(" ").map(Number);
     var arr = input[line++].split(" ").map(Number);
     sort(arr);
     console.log(diff(arr, n, m))
 }
}
function sort(arr) { 
    let n = arr.length;
        
    for(var i = 0; i < n; i++) {
        var min = i;
        for(var j = i+1; j < n; j++){
            if(arr[j] < arr[min]) {
                min=j; 
            }
         }
         if (min != i) {
             var tmp = arr[i]; 
             arr[i] = arr[min];
             arr[min] = tmp;      
        }
    }
    return arr;
}


function diff(arr, n, m) {
    var max = 0;
    var min = 0;

for (var i = 0, j = n - 1; i < m; i++, j--) {
	min = min + arr[i];
    console.log(min);
	max = max + arr[j];
    console.log(max);
	
}
  return (max - min);
}





if (process.env.USERNAME === "admin") {
    runProgram('1\n5 1\n4 2 1 3 5');
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



