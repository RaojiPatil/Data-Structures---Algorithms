var arr = [1, 3, 2, 4];
var out = "";

for(var i = 0; i < arr.length; i++) {
    for(var j = i+1; j < arr.length; j++) {
        if(arr[i] < arr[j]) {
            out = out + arr[j] + " ";
            break;
        } if(arr[i] > arr[j]) {
            out = out + "-1" + " ";
            continue;
    
        } 
    }
}
console.log(out);



var arr = [1, 3, 2, 4];
var n = arr.length;
var out = "";

for (var i = 0; i < n; i++) {
var val = -1;
for (var j = i + 1; j < n; j++) {
  if (arr[i] < arr[j]) {
	val = arr[j];
	break;
  }
}
 out = out + val + " ";
}
console.log(out);
	

