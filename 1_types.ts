//bool
const isFetching: boolean = true;
const isLoading: boolean = false;

//number
const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

//str
const str: string = 'hello ts';

//array
const numberArray: number[] = [1, 1, 2, 3, 4, 5, 13];
const numberArray2: Array<number> = [1, 1, 2, 3, 4, 5, 13];
const strArray: Array<string> = ['a', 'b'];

//tuple
const contact: [string, number] = ['Nikita', 88005553535]

//Any
let variable: any = 42;
variable = 'new str';

//func

function sayMyName(name: string): void {
	console.log(name);
}

sayMyName('Nikita');

//Never
function throwError (message: string): never {
	throw new Error('message');
}

function infinite(): never {
	while (true) {

	}

}

//Type
type Login = string;
const login: Login = 'admin';

type ID = string | number;
const id: ID = 1234;
const id2: ID = '1234';

type SomeType = string | null | undefined;
