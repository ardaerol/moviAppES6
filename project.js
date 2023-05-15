const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const secondCardBody = document.querySelectorAll(".card-body")[1];
const clearAll = document.getElementById("clear-films");
// UI objesini başlatma



// Tüm eventleri yükleme

eventListeners();

function eventListeners(){
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = Storage.getFilmsFromStroge();
        UI.loadAllFilms(films);
    });

    secondCardBody.addEventListener("click", deleteFilm);
    clearAll.addEventListener("click",clearAllFilms);
}

function addFilm(e){
    e.preventDefault();
   
    const title = titleElement.value;
    const director = directorElement.value;
    const url =   urlElement.value;

    if(title === "" || director === "" || url === "") {
        //hata
        UI.displayMessages("Tüm alanları doldurun..","danger");
    }
    else{
        // Yeni film oluşturma
        const newFilm = new Film(title,director,url);

        UI.addFilmToUI(newFilm);  // arayüze Film ekleme
       
        UI.displayMessages("Film eklendi","success");
        Storage.addFilmToStorage(newFilm); // storage film ekleme
        
    }

    UI.clearInput(titleElement,urlElement,directorElement);
    e.preventDefault();
}

function deleteFilm(e){

    if(e.target.id === "delete-film"){
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessages("Film silindi","success");
    }

   
}

function clearAllFilms(){
    if(confirm("Emin misiniz?")){
    UI.clearAllFilmsFromUI();
    Storage.clearAllFilmsFromStorage();
    UI.displayMessages("Tüm filmler silindi","success");
    }
    
}