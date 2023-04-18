const cardConfig = {
  formSelector: '.popup__edit',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_type_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
};

const elementTemplate = document.querySelector('.element-template');
const popupFormAdd = document
  .querySelector('.popup_type_add')
  .querySelector('.popup__edit');
const popupFormEdit = document
  .querySelector('.popup_type_edit')
  .querySelector('.popup__edit');
const nameInput = document.querySelector('.popup__input_type_name');
const aboutInput = document.querySelector('.popup__input_type_job');

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
  popupFormEdit,
  popupFormAdd,
  elementTemplate,
  nameInput,
  aboutInput,
};
