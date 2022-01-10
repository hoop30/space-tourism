
// MENU SANDWICH MOBILE

    //je selectione le menu
    var menusw = document.querySelector('.menu')
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
    menusw.addEventListener('click', sandwich)

// MENU NAV-BAR

//je selectione les liens menu
var menunb = document.querySelectorAll('.nav-liste a')
//je parcourt les lien menu
for (var i = 0 ; i < menunb.length ; i++) {
        
        //function display none
        var displaynone = function() {
            //je parcourt les liens du menu
            for (var i = 0 ; i < menunb.length ; i++) {
                //console.log(this)
                
                //pour les hash de chaque liens parcouru, j'ajoute la class none
                document.querySelector(menunb[i].hash).classList.add('none')

                //je selectione les hash du lien cliker
                var hashtag = this.hash
                //je selectione les elements ayant ce lien en id
                var lien = document.querySelector(hashtag)
                
                //console.log('hashtag', hashtag ,'lien',lien)
                
                //je supprime la class none pour lien
                lien.classList.remove('none')
                
                //console.log('lien', lien)
            }
        }
    //pour les liens parcourut, si il y a un click je lance la function display none    
    menunb[i].addEventListener('click',displaynone )
}

