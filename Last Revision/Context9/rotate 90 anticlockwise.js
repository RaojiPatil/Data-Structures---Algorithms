function rotateBy90(R, matrix){
   
    for(var a = R-1; a >= 0; a--) {
        let out = "";
        for(b = 0; b < R; b++) {
            out = out + matrix[b][a] + " ";
        }console.log(out);
 
    }       
   
 }
 