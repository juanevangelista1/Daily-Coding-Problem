function findUniqueElements(arr) {
	const counts = {};

	for (const num of arr) {
		counts[num] = (counts[num] || 0) + 1;
	}

	for (const num in counts) {
		if (counts[num] === 1) {
			result.push(Number(num));
		}
	}

	return result;
}

const array = [2, 4, 6, 8, 10, 2, 6, 10];
const uniqueElements = findUniqueElements(array);
console.log(uniqueElements);
