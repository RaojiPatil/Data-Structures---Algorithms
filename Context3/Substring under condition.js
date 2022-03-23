var str = "abcab";


var count = 0;
for(var i = 0; i < str.length; i++) {
    for(var j = i; j < str.length; j++) {
        if(str[i] == str[j]) {
            count++;
        }
    }
}
console.log(count);