let new_arr =[];

function permistaion(arr, curr) {
  
    if(curr === arr.length) {
        new_arr.push(arr.join(" "))
        return
    }

    for(var i = curr; i<arr.length; i++) {
        swap(arr,i,curr)
        permistaion(arr, curr+1)
        swap(arr, i, curr)
    }

    function swap(arr, i, j) {
        var temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp;
    }
}



function runProgram(input) {
    var input = input.split("\n");

    var n = +input[0]
    var arr = input[1].split(" ").map(Number);
    var curr = 0;
    permistaion(arr, curr)
    new_arr.sort()
    for (var i = 0; i < new_arr.length; i++) {
      console.log(new_arr[i]);
    }  
}

if (process.env.USERNAME === "admin") {
    runProgram('');
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function(input) {
        read += input;
    });
    process.stdin.on("end", function() {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function() {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}