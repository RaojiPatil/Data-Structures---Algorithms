// 1 brouth fource approch  O(n^2);

// 2 sorting approch    O(nlogn);

// 3 key value pairs   O(n);

// 4 optimize approch;  

var arr = [1,3,4,2,1,4,5, 2];
var out = "";

for(var i = 0; i < arr.length; i++) {
    for(var j = i+1; j < arr.length; j++) {
        if(arr[i] == arr[j]) {
          out = out + arr[i] + " ";
        }
    }
}
console.log(out);


//

var arr = [1,3,4,2,1,2,4,5, 2];
var out = "";

arr.sort(function (a, b) {return a-b});

for(var i = 0; i < arr.length; i++) {
    if(arr[i] == arr[i+1]){
        out = out + arr[i] + " ";
    }
}

console.log(out);


// 

