export class Card {
    title: string;
    description: string;

    constructor(title: string, description: string) {
        this.title = title,
        this.description = description
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
            description: this.description
        });
    }
}