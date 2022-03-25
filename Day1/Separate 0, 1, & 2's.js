// 1  

var arr = [1, 2, 1, 0, 2, 1, 0];
var n = arr.length;

var out = "";
var out1 = "";
var out2 = "";
for(var i = 0; i < arr.length; i++) {
    if(arr[i] == 0) {
    out = out + arr[i] + " ";
    }if(arr[i] == 1) {
        out1 = out1 = arr[i] + " ";
    } if(arr[i] == 2) {
        out2 = out2 + arr[i] + " ";
    }
}
console.log(out+ out1 + out2);




// 2 Dutch national flag algorithem        O(n); 

var arr = [1, 2, 1, 0, 2, 1, 0];
var n = arr.length;

var low = 0;
var high = n;
var mid = 0;

while(mid <= high) {
    switch (arr[mid]) {
        case 0 : {
            swap(arr[low], arr[mid])
            low++;
            mid++;
            break;
        }
        case 1: {
            mid++;
            break;
        }case 2 : {
            swap (arr[mid], arr[high])
            high--;
            break;
        }
    }
}
console.log(arr);



