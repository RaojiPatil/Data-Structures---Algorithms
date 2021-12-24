let arr = [ 2, 3, 4, 10, 40 ];
let s = 40;
let n = arr.length


function binarysearch (arr, l, r, s) {

    if (r >= l) {
        let mid = l + Math.floor((r-l)/2);

        if(arr[mid] == s) 
            return mid;
        
        if(arr[mid] > s) 
            return binarysearch(arr, l, mid-1, s);
        
        return binarysearch(arr, mid+1, r, s);
    }
    return -1;
}

let result = binarysearch(arr, 0, n - 1, s);;

(result == -1);
 console.log(result)


// JavaScript program to implement recursive Binary Search

let arr = [ 2, 3, 4, 10, 40 ];
let x = 40;
let n = arr.length

function binarySearch(arr, l, r, x){
	if (r >= l) {
		let mid = l + Math.floor((r - l) / 2);

		// If the element is present at the middle
		// itself
		if (arr[mid] == x)
			return mid;

		// If element is smaller than mid, then
		// it can only be present in left subarray
		if (arr[mid] > x)
			return binarySearch(arr, l, mid - 1, x);

		// Else the element can only be present
		// in right subarray
		return binarySearch(arr, mid + 1, r, x);
	}

	// We reach here when element is not
	// present in array
	return -1;
}

let result = binarySearch(arr, 0, n - 1, x);
(result == -1);
 console.log(result)



 //

 

 function runProgram(input) {
    var input = input.trim().split("\n");
    var [n, s] = input[0].split(" ").map(Number);
    var arr = input[1].split(" ").map(Number);


function binarySearch(arr, l, r, s){
	if (r >= l) {
		let mid = l + Math.floor((r - l) / 2);

		if (arr[mid] == s)
			return mid;

		if (arr[mid] > s)
			return binarySearch(arr, l, mid - 1, s);

		return binarySearch(arr, mid + 1, r, s);
	}

	return -1;
}

let out = binarySearch(arr, 0, n-1, s);
(out == -1);

if(out == -1) {
    console.log("-1")
}else {
    console.log("1");
}

  }
  
  if (process.env.USERNAME === "Ash") {
      runProgram(``);
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