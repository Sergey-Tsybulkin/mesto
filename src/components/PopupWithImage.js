import Popup from './Popup.js';
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._name = this._popup.querySelector('.popup__opened-title');
    this._link = this._popup.querySelector('.popup__opened-image');
  }

  open(name, link) {
    super.open();
    this._link.src = link;
    this._link.alt = name;
    this._name.textContent = name;
  }
}