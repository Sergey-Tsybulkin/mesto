export default class Card {
  constructor(
    {
      data,
      userId,
      handleCardClick,
      handleDeleteCard,
      handleAddLike,
      handleDeleteLike,
    },
    cardTemplateSelector
  ) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._userId = userId;
    this._likes = data.likes;
    this._cardId = data._id;
    this._handleDeleteCard = handleDeleteCard; // icon card delete
    this._handleCardClick = handleCardClick;
    this._handleAddLike = handleAddLike;
    this._handleDeleteLike = handleDeleteLike;
    this._cardTemplateSelector = cardTemplateSelector;
    this._cardOwnerId = data.owner._id; // id of card creator
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
    this._cardImage = this.element.querySelector('.elements__image');
    this.cardText = this.element.querySelector('.elements__caption');
    this._likeButton = this.element.querySelector('.elements__like-button');
    this._deleteButton = this.element.querySelector('.elements__trash');
    this._likesCounter = this.element.querySelector('.elements__like-counter');
    this._cardImage.src = this._link;
    this._cardImage.alt = `Фотография города ${this._name}`;
    this.cardText.textContent = this._name;
    this._handleDeleteButton(); //on create of card chekin equal user id with creator id
    this._likesCounter.textContent = this._likes.length; // likes counter
    this._checkLikeUser();
    this._setEventListeners();
    return this.element;
  }

  deleteCard() {
    this.element.remove();
    this.element = null;
  }

  //change count of likes, set and delete likes
  handleLikeButton(data) {
    this._likes = data.likes;
    this._likesCounter.textContent = this._likes.length;
    this._likeButton.classList.toggle('elements__like-button_disabled');
  }

  _checkLikeUser() {
    //_checkLikedState
    this._data.likes.forEach((likeUser) => {
      if (likeUser._id === this._userId) {
        this._likeButton.classList.add('elements__like-button_disabled');
      }
    });
  }

  _handleDeleteButton() {
    if (this._userId !== this._cardOwnerId) {
      this._deleteButton.remove();
    }
  }

  _setEventListeners() {
    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteCard(this._cardId); //get id of card and delete card from server
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link); // open popup image on click
    });

    this._likeButton.addEventListener('click', () => {
      if (
        this._likeButton.classList.contains('elements__like-button_disabled')
      ) {
        this._handleDeleteLike(this._cardId);
      } else {
        this._handleAddLike(this._cardId);
      }
    });
  }
}
