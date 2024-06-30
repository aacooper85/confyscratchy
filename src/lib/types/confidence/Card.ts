import { ConfidenceRow } from "./Row";

export class ConfidenceCard {
    title: string;
    description: string;
    rows: ConfidenceRow[];

    constructor(title: string = 'My Card', description: string = 'Card Description', rowArray: number[][]) {
        this.title = title,
        this.description = description,
        this.rows = this.parseArray(rowArray);
    }

    scratchUrl() {
        return `/scratch/${this.base64()}`;
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
        return rowArray.map(pair => new ConfidenceRow(pair[0], pair[1]));
    }
	
}