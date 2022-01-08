
function runProgram(input){
var input = input.trim().split("\n");

var str1 = +input[0].split("")
var str1 = +input[1].split("")



var X=str1; 
var Y=str2; 
var m = X.length; 
var n = Y.length; 



function similar(  X,  Y , m , n ) 
{ 
    if (m == 0 || n == 0) 
    return 0; 
    if (X[m-1] == Y[n-1]) 
    return 1 + similar(X, Y, m-1, n-1); 
    else
    return max(similar(X, Y, m, n-1), similar(X, Y, m-1, n)); 
} 

function max(a , b) 
{ 
    return (a > b)? a : b; 
} 

console.log(similar( X, Y, m, n ) ); 



}
    
    
if (process.env.USERNAME === "Ash") {
        runProgram("");
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
    



