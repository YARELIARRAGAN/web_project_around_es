

//Array de tarjetas inciales
const initialCards = [
    {name: "Valle de Yosemite", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"},
    {name: "Lago Louise", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"},
    {name: "Montañas Calvas", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"},
    {name: "Latemar", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"},
    {name: "Parque Nacional de la Vanoise", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"},
    {name: "Lago di Braies", link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"}
];

//Selecionar elementos del modal de "editar perfil"
const profilePageSection = document.querySelector(".profile");
const buttonEditProfile = profilePageSection.querySelector(".profile__edit-button");
const nameProfile = profilePageSection.querySelector(".profile__title");
const descriptionProfile = profilePageSection.querySelector(".profile__description");
const modalEditProfile = document.querySelector("#edit-popup");
const closeModalEditProfile = modalEditProfile.querySelector(".popup__close");
const inputTypeName = modalEditProfile.querySelector(".popup__input_type_name");
const inputTypeDescription = modalEditProfile.querySelector(".popup__input_type_description");
let formElement = document.querySelector("#edit-profile-form");

//Seleccionar elementos de template de card
const cardsSection = document.querySelector(".cards");
const cardsList = cardsSection.querySelector(".cards__list")
const templateCard = cardsSection.querySelector("#card__template").content.querySelector(".card");


//Seleccionar elementos del modal de añadir tarjetas
const modalAddCard = document.querySelector("#new-card-popup");
const buttonAddCard = document.querySelector(".profile__add-button");
const closeModalAddCard = modalAddCard.querySelector(".popup__close");
let formElementAddCard = modalAddCard.querySelector("#new-card-form");
let placeInput = modalAddCard.querySelector(".popup__input_type_card-name");
let imageInput = modalAddCard.querySelector(".popup__input_type_url");

//Seleccionar elementos del modal de imagen
const modalImage = document.querySelector("#image-popup");
const popUpImage = modalImage.querySelector(".popup__image");
const popUpParagraph = modalImage.querySelector(".popup__caption");
const closeModalImage = modalImage.querySelector(".popup__close-image");

//Funciones para abrir y cerrar modal
function openModal(modal) {
    modal.classList.add("popup_is-opened");
}

function closeModal(modal) {
    modal.classList.remove("popup_is-opened");
}

//Eventos para los botones de editar perfil y cerrar modal
buttonEditProfile.addEventListener("click", function () {
    handleOpenEditModal();
});

closeModalEditProfile.addEventListener("click", function () {
    closeModal(modalEditProfile);
});

//Funciones para rellenar el modal con la info del perfil
function fillProfileForm() {
    inputTypeName.value = nameProfile.textContent;
    inputTypeDescription.value = descriptionProfile.textContent;
}

function handleOpenEditModal() {
    fillProfileForm()
    openModal(modalEditProfile)
}

//Enviar el formulario y modificar datos
function handleProfileFormSubmit(evt) {
    evt.preventDefault();

    let nameValue = inputTypeName.value;
    let jobValue = inputTypeDescription.value;
   
    nameProfile.textContent = nameValue;
    descriptionProfile.textContent = jobValue;
    
    closeModal(modalEditProfile);

}

//Evento para enviar el formulario y modificar los datos del perfil
formElement.addEventListener('submit', handleProfileFormSubmit);

//Objeto de datos de cards
const cardData = {
    name: "Sin título",
    link: "./images/placeholder.jpg",
}
//funcion del boton "Me gusta" activo y desactivo
function likeButton (evt) {
    evt.target.classList.toggle("card__like-button_is-active");
}
//Funcion del boton elimunar una tarjeta
function deleteButton (evt) {
   evt.target.closest(".card").remove();
}
//function para hacer zoom a la imagen
function zoomInImage (text, link) {

    //Usar los elementos del modal y darles valor
    popUpParagraph.textContent = text;
    popUpImage.src = link;
  
    //detector el boton cierre del modal

}
//Detector de clic del cierre del modal de la imagen 
closeModalImage.addEventListener("click", function () {

    closeModal(modalImage);
})
//Funcion que crea elementos de la tarjeta apartir del objeto cardData
function getCardElement(name, link) {

    //Clonar el elemento template que contiene la card
    const cardElement = templateCard.cloneNode(true);
    //Seleccionar elementos de la card
    const cardLikeButton = cardElement.querySelector(".card__like-button");
    const cardDeleteButton =  cardElement.querySelector(".card__delete-button");
    
    //Seleccionar los elementos de imagen y titulo para darles valor
    const cardImage = cardElement.querySelector(".card__image");
    cardImage.src = link;
    cardImage.alt = name;
    const cardTitle = cardElement.querySelector(".card__title");
    cardTitle.textContent = name;   

    //Evento de clic del boton "me gusta"
    cardLikeButton.addEventListener("click", likeButton);

    //Evento de clic del boton eliminar
    cardDeleteButton.addEventListener("click", deleteButton);

    //Evento de clic de la imagen
    cardImage.addEventListener("click", function (){
        openModal(modalImage);
        zoomInImage(name, link);
        
    });
   

    return cardElement 
}

//Funcion para agregar el template al HTML con sus valores
function renderCard(nameValue, linkValue, cardsList) {

    //Usar la funcion para darle valor a la tarjeta y crearla
    const cardElements = getCardElement(nameValue, linkValue)

    //Agregar oficialmente la tarjeta al DOM
    cardsList.appendChild(cardElements)
}

//Bucle para crear las cards dinamicamente
initialCards.forEach( function (cardData) {
    renderCard(cardData.name, cardData.link, cardsList);
});

//Evento de clic para abrir y cerrar del modal del formulario de añadir tarjeta
buttonAddCard.addEventListener("click", function() {
    openModal(modalAddCard);
});
closeModalAddCard.addEventListener("click", function () {
    closeModal(modalAddCard);
});
//Evento submit para enviar el formulario del modal de crear una tarjeta
 function handleCardFormSubmit(e) {
    e.preventDefault();    
    
    //darle valor al objeto con los datos
    cardData.name = placeInput.value;
    cardData.link = imageInput.value;

    //crear y añadir la tarjeta
    renderCard(cardData.name, cardData.link, cardsList)

    //cerrar el modal
    closeModal(modalAddCard);

    //resetear el modal
    e.target.reset();
 }
//evento submit del formulario 
 formElementAddCard.addEventListener('submit', handleCardFormSubmit);


 