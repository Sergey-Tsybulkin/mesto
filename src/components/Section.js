export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(item, space) {
    if (space === 'append') {
      this._container.append(item);
    } else {
      this._container.prepend(item);
    }
  }

  //calls for each data func from renderer
  renderItems(data) {
    data.forEach((item) => this._renderer(item));
  }
}