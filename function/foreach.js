export const forEach = (arr, fn) => {
	for (let i = 0; i < arr.length; i++) fn(arr[i]);
};

export const forEachObj = (obj, fn) => {
	for (let prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			fn(obj[prop]);
		}
	}
};
