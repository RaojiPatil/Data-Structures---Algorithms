// Find largest number in the arr;


var arr = [4,5,6,7,8,9,5,4,3,3,560,6,7,65,6,65,5,,65,4,,43,33,34, 7];
var n = arr.length;
var max = arr[0];

for (var i = 0; i < n; i++) {
    if(max < arr[i]) {
        max = arr[i]
    }
}console.log(max);



/*  2 Given an array arr[] of size, N. Find the subarray with maximum XOR. 
 A subarray is a contiguous part of the array. */

let arr = [ 8, 1, 2, 12 ];
let n = arr.length;

function maxSubarrayXOR(arr, n)
{
    
    let ans = Number.MIN_VALUE;   
    
    for(let i = 0; i < n; i++) {
        let curr_xor = 0; 
        for(let j = i; j < n; j++) {
            curr_xor = curr_xor ^ arr[j];
            ans = Math.max(ans, curr_xor);
        }
    }
    return ans;
}
console.log(maxSubarrayXOR(arr, n));



//  3 
var n1 = 55;
var n2 = 30;

var temp = (n1 % n2);
console.log(temp);




//4  Given a positive integer n. Find the sum of product of x and y such that floor(n/x) = y 


function sumofproduct(n) {
    var ans = 0;

   for(var x = 1; x <= n; x++) {
       var y = parseInt(n / x);

       ans += (y * x);
   }
   return ans;
   }

   console.log(sumofproduct(5));



/* 5 You are given a cubic dice with 6 faces. All the individual faces have a number printed on them. 
The numbers are in the range of 1 to 6, like any ordinary dice. You will be
 provided with a face of this cube, your task is to guess the number on the opposite face of the cube
*/


function oppositeFaceOfDice(N) {
    var res= 7-N;
        return res
}
console.log(oppositeFaceOfDice(6));


function oppositeFaceOfDice(N) {
       if(N==6){
           return 1;
       }
       else if(N==5){
           return 2;
       }
       else if(N==4){
           return 3;
       }
       else if(N==3){
           return 4;
       }
       else if(N==2){
           return 5;
       }
       else if(N==1){
           return 6;
       }
}
console.log(oppositeFaceOfDice(3));



/* 6. 
Consider a game where a player can score 3 or 5 or 10 points in a move.
 Given a total score n, find number of distinct combinations to reach the given score.
*/
let n = 8;

function count(n) {

    let table = new Array(n + 1), i;

    for(let j = 0; j < n + 1; j++)
            table[j] = 0;

    table[0] = 1;

    for (i = 3; i <= n; i++)
    table[i] += table[i - 3];
    
    for (i = 5; i <= n; i++)
    table[i] += table[i - 5];
    
    for (i = 10; i <= n; i++)
    table[i] += table[i - 10];

    return table[n];
}
console.log(count(n));




// 7 factorial 


var n = 8;
var sum = 1;
for (var i = 1; i <= n; i++) {
    sum = sum * i;
}
console.log(sum);


function f(n) {
    if((n == 0) || (n == 1))
    return n;
    return n * f(n-1);
}

console.log(f(8));



