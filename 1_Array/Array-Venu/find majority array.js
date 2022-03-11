// Brout force method

var arr = [2,3,1,1,1, 1,4];
var n = arr.length/2;

var maxcount = 0;
var index = -1;
for(var i = 0; i < arr.length; i++) {
  var count = 1;
  for(var j = 0; j < arr.length; j++) {
   if(arr[i] == arr[j]) {
     count++;
   }
  }

  if(count > maxcount) {
  maxcount = count;
  index = i;

  }
}
if(arr.length/2 < maxcount) {
  console.log(arr[index]);
} else{
  console.log("no")
}



// sorting approch;

var arr = [2,3,1,1,2,2,2];
var n = arr.length;
var count = 0;
var index = -1;
arr.sort(function(a,b) {return a-b});
console.log(arr);
for(var i = 0; i < n/2; i++) {
  if(arr[i] == i+arr[n/2]) {
   count++;
   index =arr[i];
  }
}
if(count > 0) {
console.log(index);
} else{
  console.log("no");
}


// 



