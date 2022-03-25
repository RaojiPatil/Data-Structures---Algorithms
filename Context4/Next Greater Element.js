var arr = [1, 3, 2, 4];
var out = "";

for(var i = 0; i < arr.length; i++) {
    for(var j = i+1; j < arr.length; j++) {
        if(arr[i] < arr[j]) {
            out = out + arr[j] + " ";
            break;
        } if(arr[i] > arr[j]) {
            out = out + "-1" + " ";
            continue;
    
        } 
    }
}
console.log(out);



var arr = [1, 3, 2, 4];
var n = arr.length;
var out = "";

for (var i = 0; i < n; i++) {
var val = -1;
for (var j = i + 1; j < n; j++) {
  if (arr[i] < arr[j]) {
	val = arr[j];
	break;
  }
}
 out = out + val + " ";
}
console.log(out);
	



//

function runProgram(input) {
  input = input.trim().split("\n");

  var testCase = input[0];
  var line = 1; 
  for(var i =0; i < testCase; i++){
      var size = input[line++];
      var arr = input[line++].trim().split(" ").map(Number);
     var out =  nextgreaterele(size, arr);
     console.log(out.join(" "));
  }
}
function nextgreaterele(N, arr) {
    var stack =[];
    var ans = [];
    for(var i = N -1; i >=0; i--){
        while (stack.length > 0 && arr[i] >= stack[stack.length -1]) {
            stack.pop();
        }if(stack.length == 0){
            ans[i] = -1;
        }else{
            ans[i] = stack[stack.length -1]
        }
        stack.push(arr[i])
    }
    return ans
}
if (process.env.USERNAME === "admin") {
  runProgram(`1
  4
  1 3 2 4`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0) ;
  });
}