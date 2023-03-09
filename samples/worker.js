console.log("worker started");
function heavyFunction(end) {
	let sum = 0;
	for (let i = 0; i < end; ++i) {
		sum += i;
		if (i % 1e6 === 0)
			postMessage({ status: "doing", value: i });
	}
	return sum;
}
onmessage = (e) => {
	console.log("worker received message", e.data);
	const ans = heavyFunction(e.data);
	postMessage({ status: "done", value: ans });
};
