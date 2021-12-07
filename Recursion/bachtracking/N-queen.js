var n = 4;
countNQueensSolutions = function(n) {
    return countNQueensHelper(
      0,
      new Array(n).fill(false),
      new Array(2 * n - 1).fill(false),
      new Array(2 * n - 1).fill(false)
    );
  
    function countNQueensHelper(numPlaced, qInCol, qInLDiag, qInRDiag) {
      var n = qInCol.length;
      if (numPlaced === n) return 1;
  
      var r = numPlaced;
      var nSols = 0;
  
      // go through each column, testing if placement is valid
      for (var c = 0; c < n; c++) {
        var ld = c - r;
        var rd = r + c;
  
        // if current position is valid, recur
        if (!qInCol[c] && !qInLDiag[ld] && !qInRDiag[rd]) {
          (qInCol[c] = true), (qInLDiag[ld] = true), (qInRDiag[rd] = true);
  
          nSols += countNQueensHelper(r + 1, qInCol, qInLDiag, qInRDiag);
  
          (qInCol[c] = false), (qInLDiag[ld] = false), (qInRDiag[rd] = false);
        }
      }
      return nSols;
    }
  };
  //console.log(nSols);