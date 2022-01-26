
//Q 14 Subarray with given sum

let arr= [15, 2, 4, 8, 9, 5, 10, 23];
let n = arr.length;
let sum = 23;

function subArraySum(arr, n, sum) {
    let out=0;

    for (let i = 0; i < n; i++) {
        out = arr[i];
        for (let j = i + 1; j <= n; j++) {
            if (out == sum) {
                console.log(i+" " +(j - 1));
                return;
            }
            if (out > sum || j == n)
                break;
                out = out + arr[j];
        }
    }

   console.log("No subarray found");
    return;
}

subArraySum(arr, n, sum);

//

let arr=[15, 2, 4, 8, 9, 5, 10, 23 ];
let n = arr.length;
let sum = 23;


function subArraySum(arr,n,sum) {
    let curr_sum = arr[0], start = 0;

    for (var i = 1; i <= n; i++) {

        while (curr_sum > sum && start < i - 1) {
            curr_sum = curr_sum - arr[start];
            start++;
        }

        if (curr_sum == sum) {
            let p = i - 1;
            console.log(start + " " + p);
            return 1;
        }

        if (i < n)
            curr_sum = curr_sum + arr[i];
    }

    console.log("No subarray found");
    return 0;
}

subArraySum(arr, n, sum);

