var row = 2;
var col = 2;
var N  =  1;
var borde = [10][10];

function followthekinght(borde, row, col, N) {
    if (row < 0 || row > 9 || col < 0 || col > 9) {
       return; 
    }

    if (N == 0) {
        borde[row][col] = 1;
        return;
    }

    followthekinght(borde, row-2, col+1, N-1);
    followthekinght(borde, row-2, col-1, N-1);
    followthekinght(borde, row+2, col+1, N-1);
    followthekinght(borde, row+2, col-1, N-1);
    followthekinght(borde, row-1, col+2, N-1);
    followthekinght(borde, row+1, col+2, N-1);
    followthekinght(borde, row-1, col-2, N-1);
    followthekinght(borde, row+1, col-2, N-1);
}
followthekinght(borde, row, col, N);

//