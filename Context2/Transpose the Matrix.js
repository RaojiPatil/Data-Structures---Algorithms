
var A = [
    [ 1, 1, 1, 1 ],
    [ 2, 2, 2, 2 ],
    [ 3, 3, 3, 3 ],
    [ 4, 4, 4, 4 ] ];


function transpose(A , B) {
var i, j;
	for (i = 0; i < N; i++) {
	for (j = 0; j < N; j++) {
		B[i][j] = A[j][i];
	}
   }  
}



	var B = Array(4).fill(0);
	for(let i = 0; i < N; i++){
	B[i] = new Array(N);
	}

	transpose(A, B);

	document.write("Result matrix is <br/>");
	for (let i = 0; i < N; i++)
	{
		for (let j = 0; j < N; j++)
			document.write(B[i][j] + " ");
		document.write("<br/>");
	}

