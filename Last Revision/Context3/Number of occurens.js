function runProgram(input) {
    var input = input.trim().split("\n");
    var [n, key] = input[0].split(" ").map(Number);
    var arr = input[1].split(" ").map(Number);

function binarysearch(arr, left, right, key) {
	if (right < left) {
		return -1;
	}

	var mid = left + Math.floor((right - left) / 2);

	if (arr[mid] == key) {
		return mid;
	}

	if (arr[mid] > key) 
		return binarysearch(arr, left, mid - 1, key);

	return binarysearch(arr, mid + 1, right, key);
}

function countvalue(arr, n, key) {
	var out = binarysearch(arr, 0, n - 1, key);

	if (out == -1)
		return 0;

	var countvalue = 1;
	var left = out - 1;
	while (left >= 0 && arr[left] == key) {
		countvalue++,
        left--;
}
	var right = out + 1;

	while (right < n && arr[right] == key) {
		countvalue++,
		right++;
}
	return countvalue;
}
console.log((countvalue(arr, n, key)));
}
  
  if (process.env.USERNAME === "admin") {
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