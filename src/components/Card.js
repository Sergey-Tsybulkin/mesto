export default class Card {
  constructor({dataItem, userId, handleCardClick, handleDeleteCard, handleSetLike, handleDeleteLike}, cardTemplateSelector) {
    this._dataItem = dataItem;
    this._name = dataItem.name;
    this._link = dataItem.link;
    this._userId = userId;
    this._likes = data.likes;
    this._cardId = dataItem._id;
    this._handleDeleteCard = handleDeleteCard; // icon card delete
    this._handleCardClick = handleCardClick;
    this._handleSetLike = handleSetLike;
    this._handleDeleteLike = handleDeleteLike;
    this._cardTemplateSelector = cardTemplateSelector;
    this._cardOwnerId = dataItem.owner._id; // id of card creator 
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
    this._likesCounter = this._element.querySelector(".elements__like-counter");

    this._handleDeleteButton(); //on create of card chekin equal user id with creator id
    this._likesCounter.textContent = this._likes.length; // likes counter 
    this._checkLikedState();
    this._setEventListeners();
    return this.element;
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }


//change count of likes, set and delete likes
  _handleLikeButton(data) {
    this._likes = data.likes;
    this._likesCounter.textContent = this._likes.length;
    this._like.classList.toggle("elements__like-button_disabled");
  }


  _checkLikeUser() {//_checkLikedState
    this._dataItem.likes.forEach((likeUser) => {
      if (likeUser._id === this._userId) {
        this._like.classList.add("elements__like-button_disabled");
      }
    });
  }

  _handleDeleteButton() {
    if (this._userId !== this._cardOwnerId) {
      this._delete.remove();
    }
  }


  _setEventListeners() {
    this.likeButton.addEventListener("click", () => {
      if (this._like.classList.contains("elements__like-button_disabled")) {
        this._handleDeleteLike(this._cardId);
      } else {
        this._handleSetLike(this._cardId);
      }
    });


    this.deleteButton.addEventListener("click", () => {
      this._handleDeleteCard(this._cardId); //get id of card and delete card from server
    });


    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link); // open popup image on click
    });
  }
}
