


var str = "{([])}";
function classicalprob(str) {
    var stack = [];
    
    for(var i = 0; i < str.length; i++) {
        if(str[i] == ")" && stack[stack.length-1] == "(") {
            stack.pop();
        } else {
            stack.push(str[i]);
        }
      
    }   if(stack.length % 2 == 0) {
        console.log("Possible");
    } else{
        console.log("notpossible");
    }
  
}
classicalprob(str);


//


var str = "{([])}";
// str = str.split("");

for(var i = 0; i < str.length; i++) {
    for(var j = 0; j < str.length; j++) {
        if(str[i] == str[j]) {
            console.log(str);
        }
    }
}


// console.log(typeof(str))