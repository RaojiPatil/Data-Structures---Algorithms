

function runProgram(input) {
input = input.trim().split('\n')
let tests = +input[0].trim()
 let line=1
      for(let i=0; i<tests; i++){
        let [x,y] = input[line++].trim().split(' ').map(Number)
        let arr = input[line++].trim().split(' ').map(Number)
        arrayReturns(x,y,arr)
    }
}


function  arrayReturns(x,y,arr){
    y = y % x
    
    let left=0;
    let right=x-1;
          
    
    while(left<right){
        let temp = arr[left]
            arr[left] = arr[right]
            arr[right] = temp
            
            left++
            right--
    }
    
    left =0 , right=y-1
    
    while(left<right){
        
        let temp = arr[left]
           arr[left] = arr[right]
           arr[right] = temp
           
           left++
           right--
           

    }
    
    left =y , right=x-1
    
     while(left<right){
        
        let temp = arr[left]
           arr[left] = arr[right]
           arr[right] = temp
           
           left++
           right--
           

    }
    
   
    console.log(arr.join(' '))
}

if (process.env.USERNAME === "admin") {
    runProgram(`3
2 1
1 2
2 2
1 2
3 1
1 2 3`);
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
      process.exit(0) ;
    });
  }