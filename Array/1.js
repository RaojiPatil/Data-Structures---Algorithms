
// swap

var a = 'rutwik';
var arr = a.split("");
var N = 6;
var output = "";
for (var i = 0; i < N; i = i + 2) {
    var temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
    output = output + arr[i] + arr[i + 1];

}
console.log(output);

//

var arr = [
    [3, 1, 8],
    [2, 6, 0]
]

row = arr.length;
col = arr[0].length;

sum = 0;
for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++) {
        if (arr[i][j] % 3 == 0) {
            sum = sum + arr[i][j];
        }
    }

}
console.log(sum);


//

var object = {
    length: 10,
    width: 20,
    Area: function() {
        console.log("Area:" + (this.length * this.width));
    },
    parameter: function() {
        console.log("parameter:" + (2 * (this.length + this.width)))
    }
}
object.Area();
object.parameter();

//
var a = 31;
var c = Array.from(String(a), Number);
var b = 0;
for (var i = 0; i < c.length; i++) {
    b = b + c[i];
}
console.log(b);


//
var a = 0;
var arr = [5, 6, 7, 8, 9, 10, 1, 2, 3];
var  k = 3;
for (var i = 0; i < arr.length; i++) {
    if(arr[i] == k) {
        a++;
        break;
    }
}console.log(i);