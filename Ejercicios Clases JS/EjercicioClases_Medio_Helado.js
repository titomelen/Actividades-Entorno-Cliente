function helado(arr) {
	var sweetVal = {
		"Plain" : 0,
		"Vanilla" :	5,
		"ChocolateChip" :	5,
		"Strawberry"	: 10,
		"Chocolate" :	10
	};
	
	var res = arr.map(elem => sweetVal[elem["flavor"]] + elem["numSprinkles"]);
	return Math.max(...res);
}