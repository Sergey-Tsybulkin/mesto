import {
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
} from './constants.js';
import { FormValidator } from './FormValidator.js';
import { Card } from './Card.js';
import { openPopup, closePopup } from './utils.js';

const validateEditForm = new FormValidator(popupFormEdit, cardConfig);
validateEditForm.enableValidation();

const validateAddForm = new FormValidator(popupFormAdd, cardConfig);
validateAddForm.enableValidation();

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

submitForm(popupFormEdit, handleFormSubmitProfile);

//add form
function handleFormSubmitCard(evt) {
  evt.preventDefault();
  const card = {
    name: inputTitle.value,
    link: inputLink.value,
  };
  const newCard = createCards(card, '#elements');
  cardElements.prepend(newCard);
  closePopup(popupAdd);
}

addButton.addEventListener('click', function () {
  openPopup(popupAdd);
  popupFormAdd.reset();
  validateAddForm.disableSubmitButton();
});

submitForm(popupFormAdd, handleFormSubmitCard);

const createCards = (card, cardsContainer) => {
  const element = new Card(card, cardsContainer);
  const cardElement = element.generateCard();
  return cardElement;
};

initialCards.forEach((elem) => {
  const newCard = createCards(elem, '#elements');
  cardElements.append(newCard);
});

// closing all popups + all buttons
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup__close')) {
      closePopup(popup);
    }
  });
});
