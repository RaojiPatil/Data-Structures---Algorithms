var str1 = "abcde";
var str2 = "edcba";
var out = "";
for(var i = str1.length-1; i >= 0; i--) {
    out = out+str1[i];
}

if(out == str2) {
    console.log(true)
} else {
    console.log(false);
}