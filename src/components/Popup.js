// popup for adding cards
export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closingByEsc = this._closingByEsc.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._closingByEsc);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._closingByEsc);
  }

  _closingByEsc(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened')) {
        this.close();
      } else if (evt.target.classList.contains('popup__close')) {
        this.close();
      }
    });
  }
}
