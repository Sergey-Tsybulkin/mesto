import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._form = this._popup.querySelector('.popup__edit');
    this._submitButton = this._form.querySelector('.popup__save');
  }

  //mothod for Card (function if submit popup confirm
  submitCallback(del) {
    this._handleSubmit = del;
  }

  //listener for submit form
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._handleSubmit();
    });
  }
}