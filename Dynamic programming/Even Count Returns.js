var arr = "574674546476";
var arr = arr.split("").map(Number);
var dp = new Array(arr.length);
var count = 0;
var sum = "";
for(var i = arr.length-1; i >= 0; i--) {
        if(arr[i] % 2 == 0) {
          count++;
  }
  dp[i] = count;
}
console.log(dp.join(" "));




