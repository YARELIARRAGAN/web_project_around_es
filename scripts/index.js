
const initialCards = [
    {name: "Valle de Yosemite", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"},
    {name: "Lago Louise", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"},
    {name: "Montañas Calvas", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"},
    {name: "Latemar", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"},
    {name: "Parque Nacional de la Vanoise", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"},
    {name: "Lago di Braies", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"}
];

initialCards.forEach( function (item) {
    
});

//Selecionar elementos del modal de "editar perfil"
const buttonEditProfile = document.querySelector(".profile__edit-button");
const closeModalEditProfile = document.querySelector(".popup__close");
const modalEditProfile = document.querySelector("#edit-popup");
const nameProfile = document.querySelector(".profile__title");
const descriptionProfile = document.querySelector(".profile__description");
const inputTypeName = document.querySelector(".popup__input_type_name");
const inputTypeDescription = document.querySelector(".popup__input_type_description");
let formElement = document.querySelector(".popup__button");

//Funciones para abrir y cerrar modal
function openModal() {
    modalEditProfile.classList.add("popup_is-opened");
}

function closeModal() {
    modalEditProfile.classList.remove("popup_is-opened");
}

//Eventos para los botones de editar perfil y cerrar modal
buttonEditProfile.addEventListener("click", function () {
    handleOpenEditModal();
});

closeModalEditProfile.addEventListener("click", function () {
    closeModal();
});

//Funciones para rellenar el modal con la info del perfil
function fillProfileForm() {
    inputTypeName.value = nameProfile.textContent;
    inputTypeDescription.value = descriptionProfile.textContent;
}

function handleOpenEditModal() {
    fillProfileForm()
    openModal()
}

//Enviar el formulario y modificar datos
function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    let nameInput = document.querySelector(".popup__input_type_name");
    let jobInput = document.querySelector(".popup__input_type_description");

    let currentName = document.querySelector(".profile__name");
    let currentJob = document.querySelector(".profile__job");

    nameInput.value = currentName.textContent;
    jobInput.value = currentJob.textContent;
}
formElement.addEventListener('submit', handleProfileFormSubmit);