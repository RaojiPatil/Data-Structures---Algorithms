// 1 brout fource approch

// 2 sorting approch

// 3 key value pairs






// 4 bit minuplitation  O(n);
// we use Ex-or oprator


var arr = [2,1,1,2,3,3,9,4,4];
var out = arr[i];
for(var i = 0; i < arr.length; i++) {
  out = out ^ arr[i];
}
console.log(out);


var nums = [2,1,1,2,3,3,9,4,14];

  for (let i = 0; i < nums.length; i++) {
      let found = false;
      for (let j = 0; j < nums.length; j++) {
          if (nums[j] === nums[i] && i != j) {
              found = true;
              break;
          }
      }
      if (!found) {
       console.log(nums[i]);
      }
  }

