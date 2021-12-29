function runProgram(input) {
    var input = input.trim().split("\n");
    var [n, search] = input[0].split(" ").map(Number);
    var arr = input[1].split(" ").map(Number);

function binarySearch(arr, left, right, search)
{
	if (right < left)
		return -1;

	var mid = left + Math.floor((right - left) / 2);

	if (arr[mid] == search)
		return mid;

	if (arr[mid] > search)
		return binarySearch(arr, left, mid - 1, search);

	return binarySearch(arr, mid + 1, right, search);
}

function count(arr, n, search)
{
	var out = binarySearch(arr, 0, n - 1, search);

	if (out == -1)
		return 0;

	var count = 1;
	var left = out - 1;
	while (left >= 0 && arr[left] == search)
		count++,
        left--;

	var right = out + 1;

	while (right < n && arr[right] == search)
		count++,
		right++;

	return count;
}
console.log((count(arr, n, search)));
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