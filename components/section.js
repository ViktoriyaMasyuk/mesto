export default class Section {
    constructor({ data,
        renderer }, selector) {
            this._renderer = renderer;
            this._elements = selector;
            this._initialArray = data;
        }
    
    renderItems() {
        this._initialArray.forEach(item => {
            this._renderer(item);
        });
    }
    
    addItem(item) {
        this._elements.append(item);
    }
    addNewItem(item) {
        this._elements.prepend(item);
    }
}