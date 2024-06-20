import { ConfidenceRow } from "./Row";

export class Card {
    title: string;
    description: string;
    rows: ConfidenceRow[];

    constructor(title: string = 'My Card', description: string = 'Card Description', rowArray?: number[][]) {
        this.title = title,
        this.description = description,
        this.rows = rowArray ? this.parseArray(rowArray) : this.defaultRows();
    }

    url() {
        return `/confidence/${this.base64()}`;
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

    defaultRows() {
        var defaultRows: ConfidenceRow[] = [];
        for (var i = 0; i < 5; i++) {
            defaultRows.push(new ConfidenceRow());
        }
        return defaultRows;
    }
}