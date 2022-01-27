var arr = "aabbc";

var out = "";

for (var i = 0; i < arr.length; i++) {
    for(var j  = i+1; j < arr.length; j++) {
         if(arr[i] == arr[j]) {
             out = out + "";
         }  else if(arr[i] != arr[j]) {
             out = out + arr[j];
             break;
         }
    }
}console.log(out);