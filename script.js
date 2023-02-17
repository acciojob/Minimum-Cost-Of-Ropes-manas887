//your code here
function minCostToFormRope(event){
	event.preventDefault();
	var inputElement = document.querySelector('input').value;
	var arr = inputElement.split(',');
	arr.sort(function (a,b) { return a-b });

	// we need to access first two element
	// add them & store ina a variable res

	// add res in array
	// increment cost by res
	var cost = 0 ;
	while( arr.length > 1) {
		var res  = Number(arr[0]) + Number(arr[1]);
		arr.push(res);
		cost = cost + res;
		arr.shift();
		arr.shift();

		arr.sort(function (a,b) { return a-b });
	}
	document.getElementById("result").textContent = cost;
}
