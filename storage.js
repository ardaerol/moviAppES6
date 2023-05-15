class Storage{

    

static addFilmToStorage(newFilm){

    let films = this.getFilmsFromStroge();

    films.push(newFilm);

    localStorage.setItem("films",JSON.stringify(films));

}

static getFilmsFromStroge(){
    let films;

    if(localStorage.getItem("films") === null){
        films = [];
    }
    else{
        films = JSON.parse(localStorage.getItem("films"));
    }
    return films;
}

static deleteFilmFromStorage(filmTitle){
    let films = this.getFilmsFromStroge();
   
    films.forEach(function(film,index){
        if(film.title === filmTitle){
            films.splice(index,1);
        }
    });
    localStorage.setItem("films",JSON.stringify(films));
}

static clearAllFilmsFromStorage = function(){
  
        localStorage.clear();
   
    
}
}

