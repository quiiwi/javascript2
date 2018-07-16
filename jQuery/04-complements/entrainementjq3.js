$(function(){

    //----------------------------
    //Naviguer dans le DOM :

    //Les méthodes next() et children() :
    //au clic sur un <h3> "effacer gallerie...", la galerie qui suit s'efface :

    /* $('#galeries h3').click(function(){
        $(this).next().fadeOut(1000); // la méthode next() permet de sélectionner la balise directement suivante, ici le <div.galerie> qui suit le <h3> sur le quel on a cliqué. Ainsi, quelque soit le <h3> cliqué, seule la balise qui le suit s'efface.Next() peut prendre un selecteur en argument pour ne selectionner que les balises suivantes répondant à celui-ci.
    }); */

    //cependant, on voudrait effacer les <img> contenues dans les <div.galerie> :
    $('#galeries h3').click(function(){
        $(this).next().children().fadeOut(1000); //la méthode children() permet de sélectionner tous les éléments enfants directs d'une balise, ici tous les balises <img> qui se trouvent dans <div.galerie> qui suit directement le <h3> que l'on a cliqué. Sans argument children() selectionne les enfants directs sans distinction.
    });

    //le méthode parent() :
    //au clic sur une image,la bordur edu parent devient rouge :
    $('.galerie img').click(function(){
        $(this).parent('.galerie').css({
            border :'2px solid red' // la méthode parent() permet de sélectionner l'élement parent direct, ici le <div.galerie> dont on met la bordure en rouge. sans argument parent() sélecitonne le parent direct sans distinction.
        });
    });

    //la méthode prev() (pour previous=précédent), le contraire de next() :

    $('#galeries p').click(function(){
        $(this).prev().css({ //prev() permet de selectionner l'élément directement précédent, ici le <div.galerie> précédent dont on réinitalise la bordure. prev() peut prendre un sélecteur en argument pour ne sélectionner que les balises précédentes répondant à celui-ci.
            border: ''
        });
    });


    //La méthode find():
    //auclic sur le bouton "effacer toutes les galeries", les <img> déscandantes de #galeries sont effacées :
    $('button').eq(0).click(function(){
        $('#galeries').find('img').fadeOut(1000); //find() permet de sélectionner tous les descendant directs ou indirects correspondants au sélecteur préciser, ici 'trouve' toutes les balises <img> qui se situent dans la balise #galeries
    });

    // Exercice "accordéon" : vous rendez fonctionnel l'accordéon du HTML : au clic sur "section 1" ou "section 2" ou "section 3" le <div> qu'on quitte se ferme, alors que le <div> de la nouvelle s'ouvre. Utilisez la classe "on" pour ouvrir un élément, et la classe "off" pour fermer un élément.


    $('#accordion h3').click(function(){
        $('#accordion .on').removeClass('on').addClass('off');
        $(this).next().removeClass('off').addClass('on');
    });


















});