import './index.css';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

import {
  cardConfig,
  initialCards,
  popupFormEdit,
  popupFormAdd,
  nameInput,
  aboutInput,
} from '../utils/constants.js';

const popupImage = new PopupWithImage('.popup_type_image');
popupImage.setEventListeners();

const createCard = (data, template) => {
  const element = new Card(data, template, handleCardClick);
  const cardElement = element.generateCard();
  return cardElement;
};

function handleCardClick(data) {
  popupImage.open(data);
}

const cardsSection = new Section(
  {
    items: initialCards.reverse(),
    renderer: (item) => createCard(item, '.element-template'),
  },
  '.elements'
);
cardsSection.renderItems();

const validateEditForm = new FormValidator(popupFormEdit, cardConfig);
validateEditForm.enableValidation();

const validateAddForm = new FormValidator(popupFormAdd, cardConfig);
validateAddForm.enableValidation();

const addPopup = new PopupWithForm('.popup_type_add', (inputValues) => {
  inputValues = addPopup._getInputValues();
  cardsSection.renderItem(inputValues);
  addPopup.close();
});

document.querySelector('.profile__add-button').addEventListener('click', () => {
  validateAddForm.toggleButtonState();
  addPopup.open();
});
addPopup.setEventListeners();

const userInfo = new UserInfo('.profile__title', '.profile__subtitle');

const profileEditPopup = new PopupWithForm('.popup_type_edit', (inputValues) => {
  inputValues = userInfo.setUserInfo(profileEditPopup._getInputValues());
  profileEditPopup.close();
});

document
  .querySelector('.profile__edit-button')
  .addEventListener('click', () => {
    validateEditForm.toggleButtonState();
    const data = userInfo.getUserInfo();
    nameInput.value = data.name;
    aboutInput.value = data.info;
    profileEditPopup.open();
  });
profileEditPopup.setEventListeners();
