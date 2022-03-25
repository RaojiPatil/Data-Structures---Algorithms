
    //

 var arr1 = [1, 5, 7, 9];
var arr2 = [2, 4, 6, 8];

 var a = arr1.concat(arr2);
// a.sort(function(a, b) {return a-b});

for(var i = 0; i < a.length; i++){
for(var j = 0; j < ( a.length - i); j++){
    if(a[j] > a[j+1]) {
    var temp = a[j]
    a[j] = a[j + 1]
   a[j+1] = temp
  }
}
}
 console.log(a);

    