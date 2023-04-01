const Times = (time, fn) => {
	for (let i = 0; i < time; i++) {
		fn(i);
	}
};