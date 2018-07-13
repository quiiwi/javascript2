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

    //Alterner fadeIn() et fadeOut() avec fadeToggle():
    $('#interr').click(function(){
        $('#black').fadeToggle(1000); //alterne fadeIn() et fadeOut() en 1s
    });

    //fadeTo()
    $('#exo1').click(function(){
        $('#orange').fadeTo(1000,0.4);
        $('#violet').fadeTo(2000,0.2); //fait une transition jusqu'à l'opacité indiquée en 2s
    });


    //-----------------------------------
    ///Les animations SLIDE : slideDown(), slideUp(), et slideToggle() :
    $('#barre').click(function(){
    // $('#rideau').slideUp(2000); //fait apparaître l'élément avec un mouvement de glissement vers le bas. Pour aller vers le haut : slideUp().

    $('#rideau').stop().slideToggle(2000); //stop()permet d'arrêter une animation en cours lorsqu'on reclique avant son exécution totale (sinon les animations s'exécutent autant de fois que de clics), et enchaîne sur l'animation suivante.
    });


    //-----------------------------------
    // Les animations ANIMATE :
    // Les animations de type "animate" agissent sur les propriétés CSS numériques telle que le positionnement top, left, right, bottom, ou encore les tailles, l'opacité, etc.. Comme par défaut les éléments HTML ont une position "static" en CSS, nous sommes obligés de leur mettre une position "relative" ou "absolute" pour pouvoir les déplacer avec animate().

    //Animation 1 : une animation simple :
    $('#anim1').click(function(){
        $('#un').animate({ top : '-200px' }, 1000 ) //les propriétés CSS se mettent dans un objet entre accolades (et entre guillemets si elles contiennent un tiret). -200px est exprimé par rapport à la position d'origine de l'élément. Notez que l'on est pas obligés de préciser "px" car c'est l'unité par défaut
    });

    // Animation 2 : 2 propriétés CSS dans la même animation :
    $('#anim2').click(function(){
        $('#deux').animate({top : '-145px',opacity:1,left :'100px' }, {duration : 1000, easing:'linear'}); //on obtient une diagonale entre la position d'origine et la position finale : -144px et 100px sont par rapport à la position d'origine. On peut mettre les options de l'animation dans un second objet entre des {}."duration" = durée en ms, "easing" = accélération/ralentissement de l'animation (valeur "linear" ou "swing" dans la version de base de jQuery, sinon utilisez une bibliothèque complémentaire ex: jQuery UI)
    });

    //animation 3 : 2 animations consécutives :
    $('#anim3').click(function(){
        /* $('#trois').animate({top : '-289px',opacity:1,left :'200px' }, 1000).animate(); */
        $('#trois').animate({top:'+=100px',left:'+=100px'},1000).animate({top:'-=100px',left:'+=100px'},1000) //on peut passer un opérateur += ou -= en valeur d'un propriété CSS dans .animate(), ce qui poursuit indefiniment l'animation = variation en relatif par rapport à la dernière position
    });

    //animation 4 : une aniamtion continue :
    /* $('#anim4').click(function(){
        $('#quatre').animate({top : '-434px',opacity:1,left :'300px' }, 1000);
    }); */
    function anim4(){
        $('#quatre').animate({ left : '400px' },3000).animate({ left : '0px'}, 3000 ,anim4); //0px signifie 0 par rapport à la position d'origine = revient à gauche du navigateur. on autrait pu mettre -=400px à la place. On peut mettre une fonction callback dans animate(), elle s'exécute uen fois l'animation complètement terminée. Ainsi, ici on appelle la fonction elle-même à chaque fin d'animation.
    }

    $('#anim4').click(anim4); // on appelle la fonction anim4 lors du clic sur le bouton. Pas de () à celle-ci pour qu'lle attende l'ordre du click.
 /*    setInterval(anim4,6000) */




}); //FIN DU DOCUMENT READY !!!!!!