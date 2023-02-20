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

for (let elem of initialCards) {
  const cardElement = elementsTemplate
    .querySelector('.elements__element')
    .cloneNode(true); //li + clone
  const cardImage = cardElement.querySelector('.elements__image');
  cardImage.src = elem.link;
  cardImage.alt = elem.name;
  cardElement.querySelector('.elements__caption').textContent = elem.name;
  toggleLikeButton(cardElement);
  removeListItem(cardElement);
  openImage(cardImage);
  cardElements.append(cardElement); //append to ul
}


const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');

const popupFormEdit = document.querySelector('.popup__edit_type_edit');
const popupFormAdd = document.querySelector('.popup__edit_type_add');

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeButtonEdit = document.querySelector('.popup__close_type_edit');
const closeButtonAdd = document.querySelector('.popup__close_type_add');
const inputName = document.querySelector('.popup__input_type_name');
const inputAbout = document.querySelector('.popup__input_type_job');
const inputTitle = document.querySelector('.popup__input_type_title');
const inputLink = document.querySelector('.popup__input_type_link');
const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');

const cardElements = document.querySelector('.elements'); // ul
const elementsTemplate = document.querySelector('#elements').content; //template

//popup for open images from blocks
const popupImage = document.querySelector('.popup_type_image');
const closeButtonImage = document.querySelector('.popup__close_type_image');
const popupOpenedImage = document.querySelector('.popup__opened-image');
const popupOpenedText = document.querySelector('.popup__opened-title');

function closeWindowEdit() {
  //refactor
  popupEdit.classList.remove('popup_opened');
}

function closeWindowAdd() {
  //refactor too
  popupAdd.classList.remove('popup_opened');
}

function closeWindowImage() {
  //refactor too
  popupImage.classList.remove('popup_opened');
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputAbout.value;
  closeWindowEdit();
}

function addListItem() {
  const cardElement = elementsTemplate
    .querySelector('.elements__element')
    .cloneNode(true); //li + clone
  const cardImage = cardElement.querySelector('.elements__image');
  cardImage.src = inputLink.value;
  cardImage.alt = inputTitle.value;
  cardElement.querySelector('.elements__caption').textContent =
    inputTitle.value;
  cardElements.prepend(cardElement); //prepend to ul
  toggleLikeButton(cardElement);
  removeListItem(cardElement);

  openImage(cardImage);
}

function removeListItem(card_element) {
  const deleteButton = card_element.querySelector('.elements__trash');
  deleteButton.addEventListener('click', () => {
    const listItem = deleteButton.closest('li');
    listItem.remove();
  });
}

function toggleLikeButton(card_element) {
  card_element
    .querySelector('.elements__like-button')
    .addEventListener('click', (evt) => {
      evt.target.classList.toggle('elements__like-button_disabled');
    });
}

function openImage(cardImage) {
  cardImage.addEventListener('click', () => {
    popupImage.classList.add('popup_opened');
    popupOpenedImage.src = cardImage.src;
    popupOpenedText.textContent = cardImage.alt;
  });
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  addListItem();
  closeWindowAdd();
}

editButton.addEventListener('click', function () {
  popupEdit.classList.add('popup_opened');
  inputName.value = profileTitle.textContent;
  inputAbout.value = profileSubtitle.textContent;
});

addButton.addEventListener('click', function () {
  popupAdd.classList.add('popup_opened');
});

closeButtonEdit.addEventListener('click', closeWindowEdit);

closeButtonAdd.addEventListener('click', closeWindowAdd);

closeButtonImage.addEventListener('click', closeWindowImage);



popupFormEdit.addEventListener('submit', handleEditFormSubmit);









popupFormAdd.addEventListener('submit', handleAddFormSubmit);

