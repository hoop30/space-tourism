
//je selectione le menu
var menu = document.querySelector('.menu')
//je selectione la liste
var liste = document.querySelector('.nav-liste')

//fonction sandwich
var sandwich = function() {

    //je change le display
    liste.classList.toggle ('none')
    //je transforme le menu
    document.querySelector('#trait1').classList.toggle('trans1')
    document.querySelector('#trait2').classList.toggle('none')
    document.querySelector('#trait3').classList.toggle('trans2')
}

//au click je lance la fonction
menu.addEventListener('click', sandwich)