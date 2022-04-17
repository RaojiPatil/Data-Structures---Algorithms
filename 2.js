// var a = [1,2,3,4,5];
// var b = [1,2,3,4,5];

// var count = 0;
// for(var i = 0; i < a.length; i++) {
//    if(a[i] != b[i]) {
//       count++;
//     }
// }
// console.log(count);



var obj1 = {a:1, b:2};
var obj2 = {a:1, b:2};

console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
