//recuperer les affcihe du film
const films = document.querySelectorAll(".film")

//indiquer que le premier film selecgtionner
let filmActuel = 0;

//indiquer le sene de la fleche
let sensAnimation = "droite";

//afficher un fikm a la fois
function afficherFilm(index){

    //cacher les autres
    films.forEach((film) => {
        film.style.display = "none";
    });


//afficher uniquement un film
films[index].style.display = "block";

//appliquer sens film
films[index].style.animation = sensAnimation === "droite"
? "apparitionDroite 0.5s ease"
: "apparitionGauche 0.5s ease";
}
//afficher le premeir au demarage du site
afficherFilm(filmActuel);

//bouton pour passer au film precedent
document.getElementById("precedent").addEventListener("click", () => {
    filmActuel--;
    sensAnimation = "gauche";

//revenur au debut
if (filmActuel < 0) {
    filmActuel = films.length - 1;
}
afficherFilm(filmActuel);
});

//bouton film suivant
document.getElementById("suivant").addEventListener("click", () => {
    filmActuel++;
    sensAnimation = "droite";

//aller au suiavnt
if (filmActuel >= films.length){
    filmActuel = 0
}
afficherFilm(filmActuel);
});