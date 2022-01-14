// Arrays problems;

var nums = [2,3,5,7,5];
var target = 8;

 var sum = 0;
 for (var i = 0; i < nums.length; i++) {
     for (var j = i+1; j < nums.length; j++) {
     if (nums[i] + nums[j] == target) {
        if (nums[i] + nums[j] == target) {
            sum = [i, j];
         
     }
     }
    }
 }console.log(sum);
 

var nums = [3,5,5,2,7,6];
var target = 9;

 var twoSum = function(nums, target) {
    const map = {};
    for (let i = 0; i < nums.length - 1; i++) {
    map[target-nums[i]] = i;
    if (nums[i+1] in map) 
    return [map[nums[i+1]], i+1];

    }
 }


 // Q 2

var nums1 = [1,3];
var nums2 = [2,4];
//var arr = num1.concat(num2);
// var arr = [...num1,...num2]
// console.log(arr);
// arr.sort(function(a, b){ return a - b});
// console.log(arr);

let array = [...nums1,...nums2]
array.sort(function(a, b) { return a - b });
// if the array length is odd, then we can just grab the middle number and use this middle number to 
if(array.length % 2 !== 0) {
let sum = Math.floor(array.length /2 ) 
console.log(array[sum]);
} else {
// if the array is even, we'll grab the 2 middle numbers and return their average 
 a = Math.floor(array.length/2)
 let b = a - 1 
console.log(array[a] + array[b])/2
}


// Q 3  Palindrome Number;

var x = -121;
var a =x.toString().split('').reverse().join("");

if(x == a) {
console.log("true");
} else {
  console.log("false");
}


var isPalindrome = function(x) {
   if (x.toString().split("").reverse().join("") == x)
       return true;
   return false;
};