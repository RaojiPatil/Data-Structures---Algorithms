var c = [0, 0, 1, 0, 0, 1, 0];

function jumpingOnClouds(c) {

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
}