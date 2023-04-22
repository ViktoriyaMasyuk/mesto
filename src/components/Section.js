export default class Section {
  renderItems({ data, renderer }, container) {
    this._renderer = renderer;
    this._container = container;
    this._initialArray = data;
    this._initialArray.forEach((sectionCard) => {
      this._renderer(sectionCard);
    });
  }

  addItem(sectionCard) {
    this._container.append(sectionCard);
  }
  prependItem(sectionCard) {
    this._container.prepend(sectionCard);
  }
}
