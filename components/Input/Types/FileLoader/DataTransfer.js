class DataTransfer {
    constructor() {
        this.items = new Set();
        this.files = this.items;
    }

    add(file) {
        this.items.add(file);

        return this.files;
    }
}


module.exports = DataTransfer;