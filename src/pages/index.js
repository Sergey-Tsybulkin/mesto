import './index.css';

import Api from '../components/Api';
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";


import {
  editButton,
  formEditProfile,
  popupFormAdd,
  buttonAvatar,
  formAvatar,
  nameInput,
  aboutInput,
  addButton,
  cardConfig,
  popupFormTypeEdit,
  popupFormTypeAdd,
  popupFormTypeAvatar
} from "../utils/constants.js"

// #####API#####
let userId;

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-65',
  headers: {
    authorization: 'e5cf9ce5-83ea-4919-bb56-96280137220a',
    'Content-Type': 'application/json'
  }
});

// ##### get ready cards and user data from server#####
Promise.all([api.getProfile(), api.getInitialCards()])
  .then(([profileInfo, cardsData]) => {
    userId = profileInfo._id;
    userInfo.editProfile(profileInfo);
    cardsList.renderItems(cardsData);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  }
  );


const validateEditForm = new FormValidator(popupFormTypeEdit, cardConfig);
const validationPopupAvatar = new FormValidator(popupFormTypeAvatar, cardConfig);
const validateAddForm = new FormValidator(popupFormTypeAdd, cardConfig);

validateEditForm.enableValidation(); 
validationPopupAvatar.enableValidation(); 
validateAddForm.enableValidation(); 


//#####create cards#####

// ##### button open popup adding photo #####
addButton.addEventListener('click', () => {
  validateAddForm.toggleButtonState(); 
  popupWithFormAdd.open();
});


const popupWithFormAdd = new PopupWithForm(
  {
    submitForm: (data) => {
      popupWithFormAdd.loading(true);
      api.addCard(data)
        .then((res) => {
          cardsList.addItem(createCard(res), 'prepend');
          popupWithFormAdd.close();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          popupWithFormAdd.loading(false);
        })
    }
  }, '.popup_type_add');
popupWithFormAdd.setEventListeners();




//
const createCard = (data) => {
  const card = new Card({
    data: data,
    userId: userId,
    handleCardClick: (name, link) => {
      popupViewImage.open(name, link);
    },

    handleDeleteCard: (cardId) => {
      popupWithConfirm.open();
      popupWithConfirm.submitCallback(() => {
        api.deleteCard(cardId)
          .then(() => {
            popupWithConfirm.close();
            card.deleteCard();
          })
          .catch((err) => {
            console.log(`Error: ${err}`);
          });
      });
    },

    handleAddLike: (cardId) => {
      api.addLike(cardId)
        .then((data) => {
          card.handleLikeButton(data);
        })
        .catch((err) => {
          console.log(`Error: ${err}`);
        });
    },
    handleDeleteLike: (cardId) => {
      api.deleteLike(cardId)
        .then((data) => {
          card.handleLikeButton(data);
        })
        .catch((err) => {
          console.log(`Error: ${err}`);
        });
    },
  }, '.element-template'); 
  return card.generateCard(); 
};


const cardsList = new Section({
  renderer: (item) => {
    const cardArray = createCard(item);
    cardsList.addItem(cardArray, 'append');
  }
},
  '.elements');


const popupViewImage = new PopupWithImage('.popup_type_image');
popupViewImage.setEventListeners();


const popupWithConfirm = new PopupWithConfirm('.popup_type_delete-photo');
popupWithConfirm.setEventListeners();





const userInfo = new UserInfo({ userNameSelector: '.profile__title', userInfoSelector: '.profile__subtitle', userAvatarSelector: '.profile__avatar' });


editButton.addEventListener('click', () => {
  const profileInfo = userInfo.getProfile();
  nameInput.value = profileInfo.name;
  aboutInput.value = profileInfo.about;
  validateEditForm.toggleButtonState(); 
  popupWithFormEdit.open();
});


const popupWithFormEdit = new PopupWithForm(
  {
    submitForm: (data) => {
      popupWithFormEdit.loading(true);
      api.editProfile(data)
        .then((res) => {
          userInfo.editProfile(res);
          popupWithFormEdit.close();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          popupWithFormEdit.loading(false);
        })
    }
  }, '.popup_type_edit');
popupWithFormEdit.setEventListeners();


buttonAvatar.addEventListener('click', () => {
  validationPopupAvatar.toggleButtonState();
  popupWithFormAvatar.open();
});


const popupWithFormAvatar = new PopupWithForm(
  {
    submitForm: (data) => {
      popupWithFormAvatar.loading(true);
      api.setUserAvatar(data)
        .then((res) => {
          userInfo.editProfile(res);
          popupWithFormAvatar.close();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          popupWithFormAvatar.loading(false);
        })
    }
  }, '.popup_type_update-avatar');
popupWithFormAvatar.setEventListeners();





