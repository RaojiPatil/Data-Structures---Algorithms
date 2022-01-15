var arr = "574674546476";
var count = 0;
var sum = "";
for(var i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 0) {
          count++;
  }
  sum = sum + count;
}
sum = sum.split("").reverse().join("");

console.log(sum);


var arr = "574674546476";

for (var i = arr.length-1; i > 0; i--) {
  if(arr[i] % 2 ==0){
  }
}

