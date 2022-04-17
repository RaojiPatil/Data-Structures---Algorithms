function runProgram(input) {
    var input = input.trim().split("\n");
    var [N, K] = input[0].split("").map(Number);
 console.log(N, K);
        
   }



var count = 0;
var count1 = 0;
for(var i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0) {
        count++;
    }else {
        count1++;
    }
    
}

console.log(count1 - count);
   if (process.env.USERNAME === "admin") {
       runProgram('');
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
   
   
   
   

var arr = [1, 2, 3, 4, 5];

var count = 0;
var count1 = 0;
for(var i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0) {
        count++;
    }else {
        count1++;
    }
    
}

console.log(count1 - count);


let arr = [-2, 3, 1, -4, 6];
let n = arr.length;

function sort(arr){
let n = arr.length;
for (let i = 0; i < n; i++)
arr[i] = arr[i] * arr[i];


}
sortSquares(arr);
console.log(arr + " ");



//

var arr = [2,5,1,4,2];
arr.sort();
var a = "";
var b = "";
for(var i = 0; i < arr.length; i++) {
    if(arr[i] % 2 == 0) {
        a = a + arr[i] + " ";
    }else {
        b = b+ arr[i] + " ";
    }
}console.log(b + a);

//


var arr = [-1, 0, 1, 2, 3, 10, 9, 7, 6, 4];
var a = "";
var b = "";
for(var i = arr.length/2; i < arr.length; i++) {
 a = a + arr[i] + " ";
}


var count = 0;
console.log(a);
for(var i = 0; i < a.length; i++) {
    if(a[i] < a[a[i+1]]) {
        count++;
    } 
}

console.log(count);
if(count == 0) {
    console.log("YES");
} else {
    console.log("NO");
}




//





function runProgram(input) {
    var input = input.trim().split("\n");
    var test= input[0];
    var line = 1;

    for (var i = 0; i < test; i++) {
        var s1 = input[line++].trim().split("");
        var s2 = input[line++].trim().split("");
        pushandshasha(s1, s2);
    } 
 
    
   function pushandshasha(s1, s2) {
    let count= 0;
    for(var i =0; i< s1.length; i++) {
        for (var j= 0; j< s2.length; j++) {
             if(s1[i] == s2[j]) {
            count++;
        }
        }
       
    }
    

    if(count ===  s1.length) {
        console.log("True");
    }
    else {
        console.log("Flase");
    }
}


 
}
   if (process.env.USERNAME === "admin") {
       runProgram('');
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



function print(arr){
    var mat=[]
    
    for(var i=0; i<arr.length; i++){
        for(var j=0; j<arr.length; j++){
            // 
            if(i==0 || i+j==arr.length - 1||i==arr.length-1){
                mat.push(arr[j][i])
             
            }
        }
    }
    console.log(mat.join(" "))
}



function runProgram(input) {
   var a = input.trim().split("\n");
   var test = +a[0];
   var line = 1;
   for(var i = 0; i < test; i++){
       var arr=[];
  
       var len=a[line++]
       for(var j=0; j<len; j++){
           arr.push(a[line++].trim().split(" ").map(Number))
       }
       print(arr)
   }
   
  }
  if (process.env.USERNAME === "admin") {
    runProgram(``);
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
      process.exit(0);
    });
  }




  var arr = [[1,2,3], 
            [4,5,6],
             [7,8,9]];
var col = arr[0];
var row = arr.length;