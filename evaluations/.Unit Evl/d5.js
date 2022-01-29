function runProgram(input) {
    var input = input.trim().split("\n");
    var test = input[0];
    var line = 1;
    var arr = input[line++].split(" ").map(Number);
    var n = input[line++];
    for (var i = 0; i < n; i++) {
        var [l, h] = input[line++].split(" ").map(Number);
        console.log(abc(arr, l, h));
        
    }
    function abc (arr, l, h) {
    var count = 0;
    var c = "";
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] > l && arr[i] < h) {
            count++;
        }c= c + count + " ";
    }
    return c;
    }
    
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



  // 
var arr = [4, 5, 2, 1, 7, 9];
var l = 1; 
var h = 9;

  var count = 0;
    var c = "";
    for (var i = 0; i < arr.length; i++) {
        if(arr[i] > l && arr[i] < h) {
            count++;
        }c= c + count + " ";
    }
 console.log(c);

 var arr = [10, 1, 10, 3, 4];
var q = [2, 9];
var count = 0; 


for (var i = 0; i < arr.length; i++) {
    if(arr[i] >= q[0] && arr[i] <= q[1]){
        count++;
    }
}
console.log(count);
    

let str1 = "abc";
let str2 = "asdbhc";
let m = str1.length;
let n = str2.length;


function isSubSequence(str1, str2, m, n) {
	if (m == 0)
		return true;
	if (n == 0)
		return false;

	if (str1[m - 1] == str2[n - 1])
		return isSubSequence(str1, str2, m - 1, n - 1);

	return isSubSequence(str1, str2, m, n - 1);
}


let res = isSubSequence(str1, str2, m, n);
if (res)
	console.log("Yes");
else
	document.write("No");
	




	function isSubSequence(str1, str2, m, n)	{
	let j = 0;
		
		for (let i = 0; i < n && j < m; i++)
			if (str1[j] == str2[i])
				j++;

		// If all characters of str1 were found
		// in str2
		return (j == m);
	}
	
	let str1 = "gksrek";
	let str2 = "geeksforgeeks";
	let m = str1.length;
	let n = str2.length;
	let res = isSubSequence(str1, str2, m, n);

	if(res)
	document.write("Yes");
	else
	document.write("No");




    //

    var arr = [[1, 2, 3],
    [4,5,6],
    [7,8,9]
];
var row = arr.length;
var col = arr[0].length;



    for (var i = 0; i < row; i++) {
    var d1 = "";
    for (var j = 0; j < col; j++) {
        d1 = d1 + arr[j][i] + " ";
    }
    console.log(d1);
    }

    


