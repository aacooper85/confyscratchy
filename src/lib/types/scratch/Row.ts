export class ScratchRow {
	length: number;
	answer: number;
	scratches: Array<boolean>;
	revealed: boolean = false;

	constructor(length: number = 5, answer: number = 0) {
		this.length = length;
		this.answer = answer;
		let scratches = new Array(length);
		for (let i = 0; i < length; i++) {
			scratches[i] = false;
		}
		this.scratches = scratches;
	}

	scratch(index: number) {
		this.scratches[index] = true;
	}

	answered() {
		return this.scratches[this.answer];
	}

	scratched(index: number) {
		return this.scratches[index];
	}

	score() {
		if (this.scratches[this.answer]) {
			let sum = 0;
			this.scratches.forEach(entry => { if (entry) { sum += 1 } });
			if (this.length - 2 * (sum - 1) > 0) {
				return this.length - 2 * (sum - 1);
			} else {
				return 0;
			}
		} else {
			return 0;
		}
	}
}

export class ScratchChoice {
	scratched: boolean;
	correct: boolean;
	revealed: boolean;
	buttonlabel: string;

	constructor(scratched: boolean = false, correct: boolean = false, revealed: boolean = false, buttonlabel: string = "?") {
		this.scratched = scratched;
		this.correct = correct;
		this.revealed = false;
		this.buttonlabel = buttonlabel;
	}

	scratch() {
		this.scratched = true;
	}
}
