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
      runProgram(`5 0\n2 -2 0 3 4`);
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