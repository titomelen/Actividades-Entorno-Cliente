const fecha = date => {
	const [m,d,y] = date.split('/')
	return y + d + m
}