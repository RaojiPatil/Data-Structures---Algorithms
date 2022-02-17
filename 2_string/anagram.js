var str1 = "raoji";                  // Time complexity = O(nlogn)
var str2 = "raoij";


var m = str1.length;
var n = str2.length;


// if(m != n) {
//     console.log("false");
// }

var m =str1.split("").sort();
var n =str2.split("").sort();

function anagram(m, n) {
for(var i = 0; i < m.length; i++){
    if(m[i] !== n[i]){
       return false
     
    }
}return true;
}

console.log(anagram(m, n));


//

var str1 = "raroji";                  // Time complexity = O(nlogn)
var str2 = "raodij";

var count  = 0;

for(var i = 0; i < str1.length; i++) {
    for(var j = 0; j < str2.length; j++) {
 if(str1[i] ==str2[j]) {
     count++;
 }
    }
}
if(str1.length == count) {
    console.log(true);
}else {
    console.log(false);
}
