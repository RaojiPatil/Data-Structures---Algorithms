var arr = [1, 2, 3, 4, 5];


for(var i = 0; i < arr.length; i++) {
    var out = 1;
    for(var j = 0; j < arr.length; j++) {
        out = out * arr[j];
    }console.log(out);
}

