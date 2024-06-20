export class Card {
    title: string;
    description: string;

    constructor(title: string = 'My Card', description: string = 'Card Description') {
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

    static fromBase64(base64string: string) {
        const parsedObject = JSON.parse(atob(base64string));
        return new this(parsedObject.title, parsedObject.description);
    }
}