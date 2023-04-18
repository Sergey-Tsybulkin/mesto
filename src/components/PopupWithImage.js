import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector, callbackSubmitForm) {
    super(popupSelector, callbackSubmitForm),
      (this._popupOpenedImage = this._popup.querySelector(
        '.popup__opened-image'
      )),
      (this._popupOpenedText = this._popup.querySelector(
        '.popup__opened-title'
      ));
  }
  open(data) {
    super.open();
    this._popupOpenedImage.src = data.link;
    this._popupOpenedImage.alt = data.name;
    this._popupOpenedText.textContent = data.name;
  }
}
