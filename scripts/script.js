//template+ul
const cardElements = document.querySelector('.elements');
const elementsTemplate = document.querySelector('#elements').content;

//profile
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

// popup edit form
const editButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');
const popupFormEdit = document.querySelector('.popup__edit_type_edit');

// popup add form
const addButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_type_add');
const popupFormAdd = document.querySelector('.popup__edit_type_add');

// Inputs
const inputName = document.querySelector('.popup__input_type_name');
const inputAbout = document.querySelector('.popup__input_type_job');
const inputTitle = document.querySelector('.popup__input_type_title');
const inputLink = document.querySelector('.popup__input_type_link');

// popup Image
const popupImage = document.querySelector('.popup_type_image');
const closeButtons = document.querySelectorAll('.popup__close');
const popupOpenedImage = document.querySelector('.popup__opened-image');
const popupOpenedText = document.querySelector('.popup__opened-title');

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function submitForm(formName, handleFormSubmit) {
  formName.addEventListener('submit', handleFormSubmit);
}

// edit form
function handleFormSubmitProfile(evt) {
  evt.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputAbout.value;
  closePopup(popupEdit);
}

editButton.addEventListener('click', function () {
  openPopup(popupEdit);
  inputName.value = profileTitle.textContent;
  inputAbout.value = profileSubtitle.textContent;
});

// close all buttons
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

submitForm(popupFormEdit, handleFormSubmitProfile);

//add form
function handleFormSubmitCard(evt) {
  evt.preventDefault();
  const card = {
    name: inputTitle.value,
    link: inputLink.value,
  };
  createCards(card, cardElements);
  closePopup(popupAdd);
}

addButton.addEventListener('click', function () {
  openPopup(popupAdd);
  popupFormAdd.reset();
});

submitForm(popupFormAdd, handleFormSubmitCard);

function toggleLikeButton(card) {
  const cardLikeButton = card.querySelector('.elements__like-button');
  cardLikeButton.addEventListener('click', (evt) => {
    evt.target.classList.toggle('elements__like-button_disabled');
  });
}

function removeCard(card) {
  const deleteButton = card.querySelector('.elements__trash');
  deleteButton.addEventListener('click', () => {
    const listItem = deleteButton.closest('li');
    listItem.remove();
  });
}

function openImage(cardImage) {
  cardImage.addEventListener('click', () => {
    openPopup(popupImage);
    popupOpenedImage.src = cardImage.src;
    popupOpenedImage.alt = cardImage.alt;
    popupOpenedText.textContent = cardImage.alt.slice(18);
  });
}

const initialCards = [
  {
    name: 'Дагестан',
    link: './images/dagestan.jpg',
  },
  {
    name: 'Москва',
    link: './images/moscow.jpg',
  },
  {
    name: 'Мурманск',
    link: './images/murmansk.jpg',
  },
  {
    name: 'Нижний Новгород',
    link: './images/nijniy_novgorod.jpg',
  },
  {
    name: 'Омск',
    link: './images/omsk.jpg',
  },
  {
    name: 'Санкт-Петербург',
    link: './images/saint_pitersburg.jpg',
  },
];

const createCard = (cardObject) => {
  const cardElement = elementsTemplate
    .querySelector('.elements__element')
    .cloneNode(true); //li + clone
  const cardImage = cardElement.querySelector('.elements__image');
  cardImage.setAttribute('src', cardObject.link);
  const cardHeading = cardElement.querySelector('.elements__caption');
  cardHeading.textContent = cardObject.name;
  cardImage.setAttribute('alt', `Фотография города ${cardHeading.textContent}`);
  toggleLikeButton(cardElement);
  removeCard(cardElement);
  openImage(cardImage);
  return cardElement;
};

const createCards = (card, cardsContainer) => {
  const element = createCard(card);
  cardsContainer.prepend(element);
};

const cards = initialCards.reverse();

cards.forEach((element) => {
  createCards(element, cardElements);
});

//validate
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__input-error_active');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__save');
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__edit'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__save_type_inactive');
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove('popup__save_type_inactive');
    buttonElement.disabled = false;
  }
};

enableValidation();
