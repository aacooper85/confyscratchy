import { ScratchRow } from "$lib/types/scratch/Row";

export class ConfidenceRow {
    length: number;
    answer: number;
    input: number[];

    constructor(length: number = 5, answer: number = 0, input?: number[]) {
        this.length = length;
        this.answer = answer;
        this.input = input ? input : this.defaultInput(this.length);
    }

    sum() {
        var sum = 0;
        this.input.forEach(entry => sum += entry);
        return sum;
    }

    defaultInput(length: number) {
        return Array(length).fill(0);
    }
	
	castToScratchRow(){
		let newrow= new ScratchRow(this.length,this.answer);
		return newrow;
	}
}