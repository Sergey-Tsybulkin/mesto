let popup = document.querySelector(".popup");
let popupEdit = document.querySelector(".popup__edit");
let editButton = document.querySelector(".profile__edit-button");
let closeButton = document.querySelector(".popup__close");
let inputName = document.querySelector(".popup__input_type_name");
let inputAbout = document.querySelector(".popup__input_type_job");
let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");

editButton.addEventListener("click", function () {
  popup.classList.add("popup_opened");
});

function closeWindow() {
  popup.classList.remove("popup_opened");
}

closeButton.addEventListener("click", closeWindow);

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = inputName.value;
  profileSubtitle.textContent = inputAbout.value;
  closeWindow();
}

popupEdit.addEventListener("submit", handleFormSubmit);
