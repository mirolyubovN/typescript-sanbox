class Typrscript {
	version: string;

	constructor(version: string) {
		this.version = version
	}

	info(name: string) {
		return `[${name}]: TS version is ${this.version}`
	}
}

// class Car {
// 	readonly model: string;
// 	readonly numbeOfWheels: number = 4;
//
// 	constructor(theModel: string) {
// 		this.model = theModel;
// 	}
// }

//same functionality as above
class Car {
	readonly numberOfWheels: number = 4;
	constructor(readonly model: string) {}
}

class Animal {
	// only available inside class (and children)
	protected voice: string = '';
	public color: string = 'black';
	// only available to animal class
	private go(): void {
		console.log('go');
	}
	constructor() {
		this.go();
	}
}

class Cat extends Animal {
	public setVoice(voice: string): void {
		this.voice = voice;
	}
}

const cat = new Cat();

cat.setVoice('Meow');
console.log(cat.color);

// ===========

abstract class Component {
	abstract render(): void;
	abstract info(): string;
}

class AppComponent extends Component {
	render(): void {
		console.log('render')
	};
	info(): string {
		return 'info';
	}
}
