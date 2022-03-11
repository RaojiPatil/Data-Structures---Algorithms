

var arr1 = [123, 126, 454, 542, 456];
var arr2 = [100, 328, 248, 689, 200];


a = arr1.sort(function(a, b) { return a-b});
b = arr2.sort(function(a, b) {return a-b});


for (var i = 0; i < a.length; i++) {
    if(a[0] < b[0] || a[a.length-1] < b[b.length-1]) {
        var res = "No";
    } else{
        var res = "Yes"
    }
}

console.log(res)



  //


  var arr = [1,2,3,4,0,6,7,8,9];
  var k = 5;
  

  var c = 0;

  for (var i = 0; i < arr.length; i++) {
      for(var j = i+1; j < arr.length; j++) {
          if(arr[i] + arr[j] == k) {
              c++;
          } 
      }
 
  }
 if(c >= 1) {
     console.log("yes");
 } else{
     console.log("no");
 }


 