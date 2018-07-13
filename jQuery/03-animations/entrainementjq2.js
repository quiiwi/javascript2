// Les ANIMATIONS jQuery

$(function(){

    //Déclaration d'une fonction callback qui  annonce la fin d'une annimation (on s'en servira plus loin) :
    function finAnim(){
        alert('Animation finie !');
    }

    //---------------------------
    // Les animation FADE : fadeIn(), fadeOut(), fadeToggle(), fadeTo() :

    $('#fadein').click(function(){

        $('#rouge').fadeIn(); //fait apparaître un élément en fordu (en jouant sur l'opacité) pendant la durée spécifiée en ms. Sans argument, jQuery prend une valeur par défaut.

        $('#bleu').fadeIn(2000); //même effet en 2s

        $('#vert').fadeIn(1000).delay(1000).fadeOut(1000,finAnim); //on peut enchapiner les aniamtions les unes à la suite des autres; On appelle la fonction callback finAnimation à la fin de fadeOut(). Attention : pas de () sinon elle s'exécute sans attendre l'ordre du fadeOut.

    });

    // Au clic sur le bouton #fadeout, l'image #imageDisp disparaît en fondu en 1s :

    $('#fadeout').click(function(){
        $('#imageDisp').fadeOut(1000);
    });

    $('#interr').click(function(){
        $('#black').fadeToggle(1000);
    });






}); //FIN DU DOCUMENT READY !!!!!!