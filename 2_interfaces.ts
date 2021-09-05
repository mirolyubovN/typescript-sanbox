interface Rect {
	readonly id: string,
	color?: string,
	size: {
		width: number,
		height: number
	}
}

const rect1: Rect = {
	id: '1',
	size: {
		width: 10,
		height: 10
	}
};

rect1.color = 'blue';

const rect2: Rect = {
	id: '2',
	size: {
		width: 10,
		height: 20
	},
	color: 'red'
};

const rect3 = {} as Rect;
const rect4 = <Rect>{}; // old style

// ==============================

interface RectWithArea extends Rect {
	getArea: () => number
}

const rect5: RectWithArea = {
	id: '3',
	color: 'black',
	size: {
		width: 12,
		height: 10
	},
	getArea(): number {
		return this.size.width * this.size.height
	}
}

// ===============

interface IClock {
	time: Date,
	setime(date: Date): void
}

class Clock implements IClock {
	time: Date = new Date();
	setime(date: Date) {
		this.time = date;
	}
}

// =================
interface Styles {
	[key: string]: string
}

const css: Styles = {
	border: '1px solid black',
	marginTop: '2px'
}
