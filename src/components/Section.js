export default class Section {
  constructor(renderer, container) {
    this._renderer = renderer;
    this._container = container;
  }
  renderItems(data) {
    this._initialArray = data;
    this._initialArray.forEach((sectionCard) => {
      this._renderer(sectionCard);
    });
  }

  addItem(item) {
    this._container.append(item);
  }
  prependItem(item) {
    this._container.prepend(item);
  }
}
