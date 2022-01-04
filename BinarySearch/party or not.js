

    function PartyNoParty(n, c, r, arr) {
        var sum = 0;
        for (var i = 0; i < c; i++){
            sum = sum + arr[i];
        }
        if (r >= sum){
            console.log("Party")
        } else 
            console.log("Sad")
        }
        
        function runProgram(input){
            input = input.trim().split("\n");
            var [n, c, r] = input[0].trim().split(" ");
            var arr = input[1].trim().split(" ").map(Number);
            arr = arr.sort((a,b)=>a-b)
            PartyNoParty(n, c, r, arr)
        }
        
        if (process.env.USERNAME === "Admin") {
        runProgram(input);
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