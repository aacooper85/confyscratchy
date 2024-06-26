export class ConfidenceRow {
    length: number;
    answer: number;
    input: number[];

    constructor(length: number = 5, answer: number = 0, input: number[] = []) {
        this.length = length;
        this.answer = answer;
        this.input = input;
    }
}