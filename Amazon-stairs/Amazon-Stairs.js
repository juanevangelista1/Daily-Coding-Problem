const countWaysToClimb = (N, X) => {
	let ways = new Array(N + 1).fill(0);

	ways[0] = 1;

	for (let i = 1; i <= N; i++) {
		for (let step of X) {
			if (i - step >= 0) {
				ways[i] += ways[i - step];
			}
		}
	}

	return ways[N];
};

console.log(countWaysToClimb(4, [1, 2]));
console.log(countWaysToClimb(4, [1, 3, 5]));
