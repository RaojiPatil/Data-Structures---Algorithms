function runProgram(input) {
    var input = input.trim().split("\n");
    var [n, x] = input[0].split(" ").map(Number);
    var arr = input[1].split(" ").map(Number);


    function binarySearch(arr, x)
    {    
        let l = 0;
        let r = arr.length - 1;
        let mid;
        while (r >= l) {
             mid = l + Math.floor((r - l) / 2);
            if (arr[mid] == x)
                return mid;
     
            if (arr[mid] > x)
                r = mid - 1;
                
            else 
                l = mid + 1;
        }
        return -1;
    }
    result = binarySearch(arr, x);
        
    (result == -1);
    console.log(result)


}
  
  if (process.env.USERNAME === "admin") {
      runProgram(`5 4\n2 -2 0 3 4`);
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


// var arr = [4, 8, 2, 3, 8, 7];
// var key = 2;
// var out = "";

// for(var i =0; i < arr.length; i++) {
// if(arr[i] == key) {
// out = i;
//    }
// }
// console.log(out);






var arr = [2,4,6,3,8,7,5];
var k = 5;

var out = [];

for(var i = 1; i <= arr.length-1; i++) {
if(arr[i] == k) {
out.push(i);

}
}
console.log(out)




// O(n);

// Binary search

var arr = [1,2,3,4];

var x = 3;

function binarySearch(arr, x) {    
    let l = 0;
    let r = arr.length - 1;
    let mid;
    while (r >= l) {
         mid = l + Math.floor((r - l) / 2);
        if (arr[mid] == x)
            return mid;
 
        if (arr[mid] > x)
            r = mid - 1;
            
        else 
            l = mid + 1;
    }
    return -1;
}

console.log(binarySearch(arr, x));





var arr = [ 2, 3, 5, 8, 9, 10, 11 ];

var val = 17;
var N =7;

function isPairSum(A, N, X) {
var i = 0;
var j = N - 1;
while (i < j) {

if (A[i] + A[j] == X)
	return true;
else if (A[i] + A[j] < X)
	i++;
else
j--;
}

return false;
}

console.log(isPairSum(arr, N, val));
	
