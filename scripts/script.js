//template+ul
const cardElements = document.querySelector('.elements');
const elementsTemplate = document.querySelector('#elements').content;

//profile
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');

// popup edit form
const editButton = document.querySelector('.profile__edit-button');
const popupEdit = document.querySelector('.popup_type_edit');
const popupFormEdit = document.querySelector('.popup__edit_type_edit');
const closeButtonEdit = document.querySelector('.popup__close_type_edit');

// popup add form
const addButton = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_type_add');
const popupFormAdd = document.querySelector('.popup__edit_type_add');
const closeButtonAdd = document.querySelector('.popup__close_type_add');

// Inputs
const inputName = document.querySelector('.popup__input_type_name');
const inputAbout = document.querySelector('.popup__input_type_job');
const inputTitle = document.querySelector('.popup__input_type_title');
const inputLink = document.querySelector('.popup__input_type_link');

// popup Image
const popupImage = document.querySelector('.popup_type_image');
const closeButtonImage = document.querySelector('.popup__close_type_image');

function closeWindow(popup) {
  popup.classList.remove('popup_opened');
}

function submitForm(formName, handleFormSubmit) {
  formName.addEventListener('submit', handleFormSubmit);
}

// edit form
function handleFormSubmitProfile(evt) {
  evt.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputAbout.value;
  closeWindow(popupEdit);
}

editButton.addEventListener('click', function () {
  popupEdit.classList.add('popup_opened');
  inputName.value = profileTitle.textContent;
  inputAbout.value = profileSubtitle.textContent;
});

closeButtonEdit.addEventListener('click', () => {
  popupEdit.classList.remove('popup_opened');
});

submitForm(popupFormEdit, handleFormSubmitProfile);

//add form
function handleFormSubmitCard(evt) {
  evt.preventDefault();
  const card = {
    name: inputTitle.value,
    link: inputLink.value,
  };
  createCard(card);
  closeWindow(popupAdd);
}

addButton.addEventListener('click', function () {
  popupAdd.classList.add('popup_opened');
  inputTitle.value = '';
  inputLink.value = '';
});

closeButtonAdd.addEventListener('click', () => {
  popupAdd.classList.remove('popup_opened');
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
  const popupOpenedImage = document.querySelector('.popup__opened-image');
  const popupOpenedText = document.querySelector('.popup__opened-title');
  cardImage.addEventListener('click', () => {
    popupImage.classList.add('popup_opened');
    popupOpenedImage.src = cardImage.src;
    popupOpenedText.textContent = cardImage.alt;
  });
  closeWindow(popupImage);
}

closeButtonImage.addEventListener('click', () => {
  popupImage.classList.remove('popup_opened');
});

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
  cardImage.src = cardObject.link;
  const cardHeading = cardElement.querySelector('.elements__caption');
  cardHeading.textContent = cardObject.name;
  cardImage.alt = `Фотография города ${cardHeading.textContent}`;
  cardElements.prepend(cardElement);
  toggleLikeButton(cardElement);
  removeCard(cardElement);
  openImage(cardImage);
  return cardObject;
};

const cards = initialCards.reverse().forEach(createCard);