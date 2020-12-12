function sumarParEImpar(arr) {
	let [even, odd] = [0, 0]
	arr.forEach(i => i%2 ? odd += i : even += i);
	return [even, odd];
}