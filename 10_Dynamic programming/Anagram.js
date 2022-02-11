var str1 = "abcd";
var str2 = "dcab";

function areAnagram(str1,str2)	{

let n1 = str1.length;
let n2 = str2.length;

if (n1 != n2)
	return false;
str1.sort();
str2.sort()

for (let i = 0; i < n1; i++)
if (str1[i] != str2[i])
  return false;
  return true;
}

console.log(areAnagram(str1,str2))




function runProgram(input) {
    var input = input.trim().split("\n");
    var test = input[0];
    var line = 1;
    for(var i = 0; i < test; i++) {
      var str1 = input[line++].split("");
      var str2 = input[line++].split("");
      console.log(areAnagram(str1,str2))
    }
    

function areAnagram(str1,str2)	{

    let n1 = str1.length;
    let n2 = str2.length;
    
    if (n1 != n2)
        return false;
    str1.sort();
    str2.sort()
    
    for (let i = 0; i < n1; i++)
    if (str1[i] != str2[i])
      return "False";
      return "True";
    }

}

  
  if (process.env.USERNAME === "admin") {
      runProgram(`2\nabcd\ndcab\naa\naaa`);
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


