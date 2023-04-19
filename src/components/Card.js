export default class Card {
  constructor(dataItem, cardTemplateSelector, handleCardClick) {
    this._dataItem = dataItem;
    this._name = dataItem.name;
    this._link = dataItem.link;
    this._cardTemplateSelector = cardTemplateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardTemplateSelector)
      .content.querySelector('.elements__element')
      .cloneNode(true);
    return cardElement;
  }

  generateCard() {
    this.element = this._getTemplate();
    this.cardImage = this.element.querySelector('.elements__image');
    this.cardImage.src = this._link;
    this.cardImage.alt = `Фотография города ${this._name}`;
    this.cardText = this.element.querySelector('.elements__caption');
    this.cardText.textContent = this._name;
    this.deleteButton = this.element.querySelector('.elements__trash');
    this.likeButton = this.element.querySelector('.elements__like-button');
    this._setEventListeners();
    return this.element;
  }

  _handleLikeButton() {
    this.likeButton.classList.toggle('elements__like-button_disabled');
  }

  _handleDeleteButton() {
    this.element.remove();
  }

  _setEventListeners() {
    this.likeButton.addEventListener('click', () => {
      this._handleLikeButton();
    });

    this.deleteButton.addEventListener('click', () => {
      this._handleDeleteButton();
    });

    this.cardImage.addEventListener('click', () => {
      this._handleCardClick(this._dataItem);
    });
  }
}
