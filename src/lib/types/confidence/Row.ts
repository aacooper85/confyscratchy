export class ConfidenceRow {
    length: number;
    answer: number;
    guesses: number[];

    constructor(length: number = 5, answer: number = 0, guesses: number[] = []) {
        this.length = length;
        this.answer = answer;
        this.guesses = guesses;
    }
}