function myFunction() {
	var a = [];

	var n = prompt("How many items to sort?");

	for (var i = 0; i < n; i++) {
		a[i] = parseInt(prompt("Enter a number: "));
		console.log(a[i]);
	}

	//bubblesort
	
	for (var i = 1; i <= n-1; i++) {
		for (var j = 0; j <= n - 2; j++) {
			if (a[j] > a[j + 1]) {
				var temp = a[j + 1];
				a[j + 1] = a[j];
				a[j] = temp;
			}
			console.log(a);
		}
	}

	console.log(a);
	var p=document.createElement("P")
	var t=document.createTextNode("sorting result="+a);
	p.appendChild(t);
	document.body.appendChild(p);

}