var arr = [2, 5, 2, 7, 7, 10, 11, 15, 18, 20, 22];

var n = arr.length;
var search = 2;


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
	var ind = binarySearch(arr, 0, n - 1, search);

	if (ind == -1)
		return 0;

	var count = 1;
	var left = ind - 1;
	while (left >= 0 && arr[left] == search)
		count++,
        left--;

	var right = ind + 1;

	while (right < n && arr[right] == search)
		count++, right++;

	return count;
}

console.log((count(arr, n, search)));



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

  //



var arr = [2, 2, 2, 7, 7, 10, 11, 15, 18, 20, 22];
var n = arr.length-1;
var x = 7;

function binarySearch(arr, l, r, x)
{
	if (r < l)
		return -1;

	var mid = l + parseInt((r - l) / 2);

	if (arr[mid] == x)
		return mid;

	if (arr[mid] > x)
		return binarySearch(arr, l, mid - 1, x);


	return binarySearch(arr, mid + 1, r, x);
}


function countOccurrences(arr, n, x)
{
	var ind = binarySearch(arr, 0, n - 1, x);

	if (ind == -1)
		return 0;

	var count = 1;
	var left = ind - 1;
	while (left >= 0 && arr[left] == x)
		count++, left--;


	var right = ind + 1;
	while (right < n && arr[right] == x)
		count++, right++;

	return count;
}

console.log((countOccurrences(arr, n, x)));


