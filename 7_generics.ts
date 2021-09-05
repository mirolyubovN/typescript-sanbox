const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5];
const arrayOfStrings: Array<string> = ['1', '1', '2', '3', '5'];


function reverse<T>(array: Array<T>): Array<T> {
	return array.reverse();
}

function reverse2<T>(array: T[]): T[] {
	return array.reverse();
}

console.log(reverse(arrayOfNumbers));
console.log(reverse(arrayOfStrings));

console.log(reverse2(arrayOfNumbers));
console.log(reverse2(arrayOfStrings));
