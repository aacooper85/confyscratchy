import { DesignRow } from "./Row";

export class DesignCard {
    title: string;
    description: string;
    rows: DesignRow[];

    constructor(title: string = 'My Card', description: string = 'Card Description') {
        this.title = title,
        this.description = description,
        this.rows = this.defaultRows();
    }

    confidenceUrl() {
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

    defaultRows() {
        var defaultRows: DesignRow[] = [];
        for (var i = 0; i < 5; i++) {
            defaultRows.push(new DesignRow());
        }
        return defaultRows;
    }
	
	addRow() {
        this.rows = [...this.rows, new DesignRow(5,0)]
    }
	
  removeRow() {
        this.rows = this.rows.slice(0,this.rows.length-1)
    }
}