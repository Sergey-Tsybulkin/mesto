const cardConfig = {
  formSelector: '.popup__edit',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_type_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
};

const popupImage = document.querySelector('.popup_type_image');
const popupOpenedImage = document.querySelector('.popup__opened-image');
const popupOpenedText = document.querySelector('.popup__opened-title');

const popups = document.querySelectorAll('.popup');
//template+ul
const cardElements = document.querySelector('.elements');

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
const submitButtonAddForm = document.querySelector('.popup__save_type_add');

// Inputs
const inputName = document.querySelector('.popup__input_type_name');
const inputAbout = document.querySelector('.popup__input_type_job');
const inputTitle = document.querySelector('.popup__input_type_title');
const inputLink = document.querySelector('.popup__input_type_link');

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

export {
  cardConfig,
  initialCards,
  popups,
  cardElements,
  profileTitle,
  profileSubtitle,
  editButton,
  popupEdit,
  popupFormEdit,
  addButton,
  popupAdd,
  popupFormAdd,
  submitButtonAddForm,
  inputName,
  inputAbout,
  inputTitle,
  inputLink,
  popupImage,
  popupOpenedImage,
  popupOpenedText,
};
