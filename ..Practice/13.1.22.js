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
 


 var twoSum = function(nums, target) {
    const map = {};
    for (let i = 0; i < nums.length - 1; i++) {
    map[target-nums[i]] = i;
    if (nums[i+1] in map) 
    return [map[nums[i+1]], i+1];

    }
 }


 /*
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 */

var num1 = [1,3];
var num2 = [2];
//var arr = num1.concat(num2);
var arr = [...num1,...num2]
console.log(arr);
arr.sort(function(a, b){ return a - b});
console.log(arr);


var arr = [2,5,6,2,1,4,8,9,3];
var n = arr.length;
var sum = 0;

for (var i = 0; i < arr.length; i++) {
if(n % 2 == 1) {
   sum = (arr[arr.length/2-1])
}
}
console.log(sum);