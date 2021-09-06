export class Resource {
    constructor(pUrl) {
        this.url = pUrl;
    }
    async load() {
        return await fetch(this.url, {
            method: 'GET'
        })
            .then(pResponse => pResponse.json());
    }
}