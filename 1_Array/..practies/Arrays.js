// 1 Arrays problems;

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

var x = 121;
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


// Q 4 
var nums = [-1,0,1,2,-1,-4];
var nums = nums.sort();

var out = [];
   for (var i = 0; i < nums.length; i++) {
       for (var j = i+1; j < nums.length; j++) {
            for (var k = j+1; k < nums.length; k++) {
              if(nums[i] + nums[j] + nums[k] == 0) {
                  out = out + ([nums[i]+ " " +nums[j]+ " "+ nums[k]]);
              }
              }
        }
        console.log(out);
        break;
   }



var nums = [-1,0,1,2,-1,-4];
var nums = [];
var low = i+1;
var high = nums.length-1;
var sum = 0;
function threeSum(nums) {

nums.sort((a, b) => a - b);
const result = [];
      
for(let i = 0; i < nums.length; i++) {
while(low < high) {

sum = nums[i] + nums[low] + nums[high];
if(sum === 0) {
result.push([nums[i], nums[low], nums[high]]);
while(nums[low+1] === nums[low]) low++;
while(nums[high-1] === nums[high]) high--;
low++;
high--;
}  else if(sum < 0)
 low++;
else
 high--;        
}
      
while(nums[i+1] === nums[i]) i++;   
}   
return result;    

};

console.log(threeSum(nums))




//Q 5; Search Numbers


var arr = [10, 1, 10, 3, 4];
var q = [2, 9];
var count = 0; 


for (var i = 0; i < arr.length; i++) {
    if(arr[i] >= q[0] && arr[i] <= q[1]){
        count++;
    }
}
console.log(count);


//Q 6 

var arr = [5, 3, 3, 3, 4, 2, 1];
var count = "";

for(var i = 0; i < arr.length; i++) {
   var min = arr[0];
   if(min > arr[i]) {
      
   }
}



//Q 7 

var arr = [2,3,5,1,4];
var Q = 2;
var out1 = "";
var out = "";

if(Q % 2 == 1) {

for (var i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0) {
        out = out + arr[i] + " ";
    }else{
        out1 = out1 + arr[i]+ " ";
    }
}

console.log(out + out1);
} else {
    
for (var i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 1) {
        out = out + arr[i] + " ";
    }else{
        out1 = out1 + arr[i]+ " ";
    }
}
console.log(out + out1);
} 


//Q 8 
//Linear search

var arr = [2,3,5,1,4];

var largest = arr[0];

for (var i = 0; i < arr.length; i++) {
    if(arr[i] > largest) {
        largest = arr[i];
    }
}console.log(largest);


var arr = [1, 30, 40, 50, 60, 70, 23, 20];
var n = arr.length;


function findMaximum(arr, low, high)
{
	var max = arr[low];
	var i;
	for (i = low + 1; i <= high; i++)
	{
		if (arr[i] > max)
			max = arr[i];
		else
			break;
	}
	return max;
}

console.log( findMaximum(arr, 0, n-1));

// Binary Search;  find largest number in the array

arr = new Array(1, 3, 50, 10, 9, 7, 6);
n = arr.length;

function findMaximum( arr, low, high)
{

	if (low == high)
		return arr[low];

	if ((high == low + 1) && arr[low] >= arr[high])
		return arr[low];
	

	if ((high == low + 1) && arr[low] < arr[high])
		return arr[high];
	
	mid = (low + high)/2;

	if ( arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1])
		return arr[mid];

	if (arr[mid] > arr[mid + 1] && arr[mid] < arr[mid - 1])
		return findMaximum(arr, low, mid-1);
		
		return findMaximum(arr, mid + 1, high);
}

console.log(findMaximum(arr, 0, n-1));


// Q 9 find peak element;
// Binary search

var arr = [6, 1, 15, 19, 9, 13, 12, 6, 7, 2, 10, 4, 1, 14, 11, 14, 14, 1,3];
var n = arr.length;

var low = 0;
var high = n-1;
var mid = low + (high-low)/2;

for (var i = low; i < high; i++) {
    if(arr[mid] > arr[mid+1]) {
        high = mid;
    } else {
        low = mid + 1;
    }
}
console.log(high);

// itertive 

var arr = [2,5,1,7,6];
var n = arr.length;
var index= 0;
for (var i = 0; i < arr.length; i++) {
    if(arr[i] > arr[i-1]) {
        index = i;
    }
}
console.log(index);

//
var arr = [1, 3, 20, 4, 1, 0];
 var n = arr.length;

function findPeak(arr, n) {

if (n == 1) 
return 0;

if (arr[0] >= arr[1]) 
return 0;

if (arr[n - 1] >= arr[n - 2])
return n - 1;

for (var i = 1; i < n - 1; i++)  {
if (arr[i] >= arr[i - 1] && arr[i] >= arr[i + 1])
return i;      
  }    
}
console.log(findPeak(arr, n));




//Q 10 Find min and max element in array;

//first find out min element;

var arr = [2, 4, 7, 1, 9, 7, 5, 6];
var smaller = arr[0];

for (var i = 0; i < arr.length; i++) {
        if(arr[i] < smaller) {
            smaller = arr[i];
        }
  }
console.log(smaller);


var arr = [9, 2, 4, 7, 1, 9, 7, 5, 6];
arr = arr.sort();
console.log(arr[0]);

// find max number in the array;

var arr = [2, 4, 7, 1, 9, 7, 5, 6];
var largest = arr[0];

for (var i = 1; i < arr.length; i++) {
    if(arr[i] > largest) {
        largest = arr[i];
    }
}console.log(largest);


// find min and max
var arr = [2, 4, 7, 1, 9, 7, 5, 6];
var smaller = arr[0];
var largest = arr[0];


for (var i = 0; i < arr.length; i++) {
    if(arr[i] > largest){
        largest = arr[i];
    } if(arr[i] < smaller) {
        smaller = arr[i];
    }
}

console.log(smaller, largest);



// Q 11:- factorial

var n = 5;
var out = 1;

for (var i = 1; i <= n; i++) {
     out = out * i;
}console.log(out);




// Q 12 reverse array

var arr = [1,2,3,4,5,6,7,8];
arr = arr.reverse();
console.log(arr);


var arr = [1,2,3,4,5,6,7,8];
var out = "";

for (var i = arr.length-1; i > 0; i--) {
    out = out + arr[i] + " ";
}
console.log(out);

var str = "raojipatil";

str = str.split("").reverse().join("");
console.log(str);



// Q 13 sort function


var arr = [5,3,7,6,20,3,8,9,1,2];
var out = 0;
// arr = arr.sort();
// console.log(arr);

arr.sort(function(a, b) {return a-b})

console.log(arr);


// comman count

var arr = [1,1,1,2,3,4,2,1,1,1];
var x = 1;
var count = 0;
for (var i = 0; i < arr.length; i++) {
    if(x == arr[i]) {
        count++;
    }
}
console.log(count);


// 

var arr = [0, 2, 1, 2, 0];

for(var i = 0; i < arr.length; i++) {
   for(var j = i+1; j < arr.length; j++){
     if(arr[j] > arr[i]) {
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
     }
   }
}
console.log(temp);

//Q 14 Subarray with given sum

let arr= [15, 2, 4, 8, 9, 5, 10, 23];
let n = arr.length;
let sum = 23;

function subArraySum(arr, n, sum) {
    let out=0;

    for (let i = 0; i < n; i++) {
        out = arr[i];
        for (let j = i + 1; j <= n; j++) {
            if (out == sum) {
                console.log(i+" " +(j - 1));
                return;
            }
            if (out > sum || j == n)
                break;
                out = out + arr[j];
        }
    }

   console.log("No subarray found");
    return;
}

subArraySum(arr, n, sum);



let arr=[15, 2, 4, 8, 9, 5, 10, 23 ];
let n = arr.length;
let sum = 23;


function subArraySum(arr,n,sum) {
    let curr_sum = arr[0], start = 0;

    for (var i = 1; i <= n; i++) {

        while (curr_sum > sum && start < i - 1) {
            curr_sum = curr_sum - arr[start];
            start++;
        }

        if (curr_sum == sum) {
            let p = i - 1;
            console.log(start + " " + p);
            return 1;
        }

        if (i < n)
            curr_sum = curr_sum + arr[i];
    }

    console.log("No subarray found");
    return 0;
}

subArraySum(arr, n, sum);



// Q 15 move all -ve number

var arr = [1, 2, -5, 4, -7, 6];
var out = "";


for (var i = 0; i < arr.length; i++) {
    if(arr[i] == )
}