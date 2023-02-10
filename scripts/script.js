let popup = document.querySelector(".popup");
let edit = document.querySelector(".profile__edit-button");
let close = document.querySelector(".popup__close");
let popupSave = document.querySelector(".popup__save");
let InputName = document.querySelector(".popup__input_name");
let InputAbout = document.querySelector(".popup__input_job");
let profileTitle = document.querySelector(".profile__title");
let profileSubtitle = document.querySelector(".profile__subtitle");

edit.addEventListener("click", function () {
  popup.classList.add("popup_opened");
	InputName.value = profileTitle.textContent; 
  InputAbout.value = profileSubtitle.textContent;
});

close.addEventListener("click", closingWindow);

popupSave.addEventListener("click", function () {
  profileTitle.textContent = InputName.value;
  profileSubtitle.textContent = InputAbout.value;
  closingWindow();
});


function handleFormSubmit (evt) {
	evt.preventDefault(); 
	profileTitle.textContent = InputName.value;
  profileSubtitle.textContent = InputAbout.value;
}

formElement.addEventListener('submit', handleFormSubmit);

function closingWindow() {
  popup.classList.remove("popup_opened");
}
