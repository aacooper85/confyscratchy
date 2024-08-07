import { ScratchRow } from "./Row";

export class ScratchCard {
    title: string;
    description: string;
    rows: ScratchRow[];

    constructor(title: string = 'My Card', description: string = 'Card Description', rowArray: number[][]) {
        this.title = title;
        this.description = description;
        this.rows = this.parseArray(rowArray);
    }

    base64() {
        return btoa(this.json());
    }

    json() {
        return JSON.stringify({
            title: this.title,
            description: this.description,
            rows: this.rows.map(r => [r.length, r.answer])
        });
    }

    static fromBase64(base64string: string) {
        const parsedObject = JSON.parse(atob(base64string));
        return new this(parsedObject.title, parsedObject.description, parsedObject.rows);
    }

    parseArray(rowArray: number[][]) {
        return rowArray.map(pair => new ScratchRow(pair[0], pair[1]));
    }

    score() {
        return this.rows.reduce((total: number, row: ScratchRow) => total + (row.score() || 0), 0);
    }

}
