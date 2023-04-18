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
  elementTemplate,
  nameInput,
  aboutInput,
} from '../utils/constants.js';

const popupImage = new PopupWithImage('.popup_type_image');
popupImage.setEventListeners();

const createCards = (data, template) => {
  const element = new Card(data, template, handleCardClick);
  const cardElement = element.generateCard();
  return cardElement;
};

function handleCardClick(data) {
  popupImage.open(data);
}

const cardsSection = new Section(
  {
    items: initialCards,
    renderer: (item) => createCards(item, elementTemplate),
  },
  '.elements'
);
cardsSection.renderItem();

const validateEditForm = new FormValidator(popupFormEdit, cardConfig);
validateEditForm.enableValidation();

const validateAddForm = new FormValidator(popupFormAdd, cardConfig);
validateAddForm.enableValidation();

const addPopup = new PopupWithForm('.popup_type_add', () => {
  const inputValues = addPopup.getInputValues();
  cardsSection.addItem(inputValues);
  addPopup.close();
});

document.querySelector('.profile__add-button').addEventListener('click', () => {
  validateAddForm.disableSubmitButton();
  addPopup.open();
});
addPopup.setEventListeners();

const userInfo = new UserInfo('.profile__title', '.profile__subtitle');

const profileEditPopup = new PopupWithForm('.popup_type_edit', () => {
  userInfo.setUserInfo(profileEditPopup.getInputValues());
  profileEditPopup.close();
});

document
  .querySelector('.profile__edit-button')
  .addEventListener('click', () => {
    validateEditForm.disableSubmitButton();
    const datas = userInfo.getUserInfo();
    nameInput.value = datas.name;
    aboutInput.value = datas.info;
    profileEditPopup.open();
  });
profileEditPopup.setEventListeners();
