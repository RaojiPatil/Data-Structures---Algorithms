var arr = "thisracecarisgood";

function longpolisubstring(arr) {

	var n = arr.length; 
	if (n < 2) {
		return n;
    } 

	var Mlength = 1;
    var start=0;
	var l;
    var h;
    
	for (var i = 0; i < n; i++) {
		l = i - 1;
		h = i + 1;
		while ( l >= 0 && arr[l] == arr[i])	{
			l--;
		}
		while ( h < n && arr[h] == arr[i]) {					
			h++;
		}
		
		while (l >= 0 && h < n && arr[l] == arr[h]){
			l--;
			h++;
		}

		let len = h - l - 1;
		if (Mlength < len) {
			Mlength = len;
			start=l+1;
		}
	}
	return Mlength;
}
console.log(longpolisubstring(arr));




