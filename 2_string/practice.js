var arr = "abcdefghijlmnopqqrsttuuvvwwqyz";
var out = "";
for (var i = arr.length-1; i >=0; i--) {
    out = out + arr[i];
}console.log(out);

//

var arr = "Early Monday morning MUSIC";
var arr = arr.split(" ");
var output = "";
for (var i = 0; i < arr.length; i++) {

    if (i < arr.length - 1) {
        output = output + arr[i] + "_";

    } else if (i == arr.length - 1) {
        output = output + arr[i];
    }
}
console.log(output);

//

var str = "stsr";
count = 0;
c1 = 0;
for (var i = 0; i < str.length; i++) {
    if ((str[i] == "a") || (str[i] == "e") || (str[i] == "i") || (str[i] == "o") || (str[i] == "u")) {
        count++;
    } else {
        c1++;
    }

}
if (count >= 1) {
    console.log("true");
} else {
    console.log("false")
}

//2 Palindrom

var str = "1221";
var wordArr2 = [];
for (var i = str.length - 1; i >= 0; i--) {
    wordArr2.push(str[i])

    if (str[i] == wordArr2[i]) {
        var res = "Yes"
    } else {
        res = "No"
    }
}
console.log(res);


//3 

var str = "abcde";

for (var i = 0; i < str.length; i++) {
    if(str[0] == "a" || str[0] == "e" || str[0]=="i" || str[0] =="o" || str[0] =="u") {
       var count = 1;
    } else{
      count = 0;
    }
}
if(count == "1"){
    console.log(str+"halk");
}else{
    console.log(str+"thor");
}

//Q 4  reverse string

var str = "raojipatil";

str = str.split("").reverse().join("");
console.log(str);



var str = "raoji";
var out = "";
str = str.slice(" ")
for(var i = str.length-1; i > 0; i--){
    out = out +str[i];
}
console.log(str);