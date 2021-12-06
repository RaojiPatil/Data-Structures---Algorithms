
function allsum(arr, K) {
    var N = arr.length;
    var count = 0;
    for (var i = 0; i < N; i++) {
        for (var j = i + 1; j < N; j++) {
            if (arr[j] - arr[i] == K) {
                count++;
            }
        }
    }
    if (count >= 1) {
        console.log("Yes");
    } else {
        console.log("No");
    }


}

