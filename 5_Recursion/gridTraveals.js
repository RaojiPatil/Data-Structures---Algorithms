function gridtravel(m, n) {
    if(m === 0 || n === 0) 
    return 0;
    if(m ===1 || n === 1) 
        return 1;
      return gridtravel(m -1, n) + gridtravel(m, n-1);
}

console.log(gridtravel(1, 2))
console.log(gridtravel(18, 18))
