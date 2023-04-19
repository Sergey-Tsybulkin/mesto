// popup for adding cards
export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closingByEsc = this._closingByEsc.bind(this);
    this._handleOverlayClose = this._handleOverlayClose.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._closingByEsc);
    this._popup.addEventListener('click', this._handleOverlayClose);
    if (this._popup.classList.contains('popup_type_image')) {
      this._popup.style.background = 'rgba(0,0,0,.9)';
    }
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._closingByEsc);
    this._popup.removeEventListener('click', this._handleOverlayClose);
  }

  _closingByEsc(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _handleOverlayClose(evt) {
    if (evt.target.classList.contains('popup_opened')) {
      this.close();
    }
  }

  setEventListeners() {
    this._popup
      .querySelector('.popup__close')
      .addEventListener('click', () => this.close());
  }
}
