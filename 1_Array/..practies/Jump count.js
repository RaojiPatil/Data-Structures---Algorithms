var c = [0,0,1,0,0,1,0];

function jumpingOnClouds(c) {
    var jumpCount = 0;
    let step = 0;
    for(let i=0; i<c.length; i){
if(c[i] === 0 && i !== (c.length - 2)){
    i = i + 2;
    jumpCount++
    } else if (c[i] === 0 && i === (c.length - 2)){
    i = i + 1;
    jumpCount++
    } else {
    i = i - 1;
    }
    }
    return jumpCount - 1;
    }

    console.log(jumpingOnClouds(c));



    function jumpingOnClouds(c){
        let numOfJumps = 0;
        
        for(let i = 0; i < c.length; i++){
        if(c[i] === 0 && c[i + 2] === 0){
        numOfJumps = numOfJumps + 1;
        i = i + 1;
        continue;
        }
        if(c[i] === 0 && c[i+1] === 0 && c[i+2] === 1){
        numOfJumps = numOfJumps + 1;
        continue;
        }
        if(c[i] === 0 && c[i+1] === 0 && !c[i+2]){
        numOfJumps = numOfJumps + 1;
        continue;
        }
        }
        
        return numOfJumps;
        }




var c = [0,0,0,0,1,0];
var count = 0;
var step = 0;

for(var i = 0; i < c.length; i) {
    if(c[i] == 0 && c[i+1] == 0 && c[i+2] == 0) {
        i = i+2;
        count++;
    } else if(c[i] == 0 && c[i+1] == 0 && c[i+2] !== 0) {
        i++;
        count++;
    }
    i++;
}
console.log(count);



var a = 3 && 0 && 2;
conso
