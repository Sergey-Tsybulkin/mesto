export default class FormValidator {
  constructor(formElement, settings) {
    this._formElement = formElement;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorTextClass = settings.errorClass;
    this._buttonElement = this._formElement.querySelector(
      this._submitButtonSelector
    );
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._inputSelector)
    );
  }

  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorTextClass);
  };

  _hideInputError = (inputElement) => {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorTextClass);
    errorElement.textContent = '';
  };

  _isValid = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _setEventListeners = () => {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement);
        this._toggleButtonState(this._inputList);
      });
    });
  };

  enableValidation = () => {
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  };

  _toggleButtonState = () => {
    if (this._hasInvalidInput(this._inputList)) {
      this._disableButton(this._buttonElement);
    } else {
      this._activeButton(this._buttonElement);
    }
  };

  _disableButton = () => {
    this._buttonElement.classList.add(this._inactiveButtonClass);
    this._buttonElement.disabled = true;
  };

  _activeButton = () => {
    this._buttonElement.classList.remove(this._inactiveButtonClass);
    this._buttonElement.disabled = false;
  };

  resetPopupForm() {
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
    this._toggleButtonState();
  }
}