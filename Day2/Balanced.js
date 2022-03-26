function check(str) {
    var stack = [];
    var flage = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] == '(' || str[i] == '{' || str[i] == '[') {
            stack.push(str[i])
        }
        else {
            if (stack.length == 0) {
                flage = 1;
                break;
            }
            else {
                if (stack[stack.length - 1] == '{' && str[i] == '}'
                || str[i] == ']' && stack[stack.length - 1] == '[' || str[i] == ')' 
                && stack[stack.length - 1]  == '(') {
                    stack.pop();
                }
                else {
                    flage = 1;
                    break;
                }
            }
        }
    }
    // console.log(stack)
    if(flage==1) {
      console.log('not balanced')
    }
    else {
       if(stack.length==0) {
        console.log('balanced');
       }
       else {
     console.log('not balanced')
       }
    }
   
}
function runProgram(input) {
    var a = input.trim().split('\n');
    //    console.log(a);
    for (var i = 1; i < a.length; i++) {
        var str = a[i].trim().split('');
        check(str);
    }

}
if (process.env.USERNAME === "admin") {
    runProgram(`3
    {([])}
    ()
    ([]
    `);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}