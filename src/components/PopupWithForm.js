import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
  constructor({ submitForm }, popupSelector) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._popupForm = this._popup.querySelector('.popup__edit');
    this._popupInputList = this._popupForm.querySelectorAll('.popup__input');
    this._submitButton = this._popupForm.querySelector('.popup__save');
    this._submitButtonText = this._submitButton.textContent;
  }

  _getInputValues() {
    this._inputValues = {};
    this._popupInputList.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
  }

  setEventListeners() {
    this._popupForm.addEventListener('submit', () => {
      this._submitForm(this._getInputValues());
    });
    super.setEventListeners();
  }

  close() {
    this._popupForm.reset();
    super.close();
  }

  loading(isLoading, downloadMessage = 'Сохранение...') {
    if (isLoading) {
      this._submitButton.textContent = downloadMessage;
    } else {
      this._submitButton.textContent = this._submitButtonText;
    }
  }
}
