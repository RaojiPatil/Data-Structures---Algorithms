// swap string;


var a = "raojipatil";
var arr = a.split("");
var out = "";

for (var i = 0; i < arr.length; i = i+2) {

    var temp = arr[i];
    arr[i] = arr[i+1];
    arr[i+1] = temp;

    out = out + arr[i] + arr[i+1];
} console.log(out);


//



var arr = ["test123", "next@123", "raoj123", "patil123"];
var output=  "";
var count = 0;

for (var i = 0; i < arr.length; i++) {
    var b = arr[i];
    for (var j = 0; j < b.length; j++) {
     if ((arr[i][j] == "@") || (arr[i][j] == "$")) {
         count = 1;
          break;
       }
    }

   if (count == 1) {
        output = output + "strong" + " ";
       count = 0;
    }  else {
        output = output + "weak" + " ";
    }
}

console.log(output);


