const cardConfig = {
  formSelector: '.popup__edit',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__save_type_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active',
};

// const elementTemplate = document.querySelector('.element-template');
const popupFormAdd = document
  .querySelector('.popup_type_add')
  .querySelector('.popup__edit');
const popupFormEdit = document
  .querySelector('.popup_type_edit')
  .querySelector('.popup__edit');
const nameInput = document.querySelector('.popup__input_type_name');
const aboutInput = document.querySelector('.popup__input_type_job');

import dagestan from '../images/dagestan.jpg';
import moscow from '../images/moscow.jpg';
import murmansk from '../images/murmansk.jpg';
import nNovgorod from '../images/nijniy_novgorod.jpg';
import omsk from '../images/omsk.jpg';
import saintPeterburg from '../images/saint_pitersburg.jpg';

const initialCards = [
  {
    name: 'Дагестан',
    link: dagestan,
  },
  {
    name: 'Москва',
    link: moscow,
  },
  {
    name: 'Мурманск',
    link: murmansk,
  },
  {
    name: 'Нижний Новгород',
    link: nNovgorod,
  },
  {
    name: 'Омск',
    link: omsk,
  },
  {
    name: 'Санкт-Петербург',
    link: saintPeterburg,
  },
];

export {
  cardConfig,
  initialCards,
  popupFormEdit,
  popupFormAdd,
  nameInput,
  aboutInput,

};

export const apiConfig = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-65',
  headers: {
    "authorization": "e5cf9ce5-83ea-4919-bb56-96280137220a",
    "Content-Type": "application/json"
  }
}