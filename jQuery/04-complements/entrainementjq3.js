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





    //--------------------------
    // Convertir un élément du DOM en objet jQuery :
    // Utilile i l'on veut utiliser des méthodes de jQuery sur des éléments du DOM.

    var elementDOM = document.getElementsByClassName('galerie')[0]; //on sélectionne en JS un élément du DOM, ici le premier div.galerie

    console.log(elementDOM);


    // Puis je le transforme en un objet jQuery :
    var objetJquery = $(elementDOM) ; //on utilise la fonction principale jQuery, alias $, pour transformer un élément du DOM en objet jQuery : vous pouvez donc lui appliquer n'importe quelle méthode spécifique à jQuery ( fadeIn, animate, ...).
    console.log(objetJquery);

    objetJquery.click(function(){
        alert('Ce <div> est un objet jQuery sur lequel on applique une syntaxe propre à JQ');
    });

    //Convertir un objet jQuery en un élément du DOM :
    var autreObjetJquery = $('.galerie'); //on sélectionne toutes les classes .galerie

    // Puis je transforme cet objet jQuery en un élément du DOM :
    var autreElementDOM = autreObjetJquery.get(); //get() transforme un objet jQuery en un array contenant tous les éléments sélectionnées
    console.log(autreElementDOM);

    autreElementDOM[1].addEventListener('click',function(){ // dans l'array, on cible un élément en mettant un indice entre crochets
        alert('Ce <div> est devenu un élément du DOM sur lequel on applique une syntaxe propre à JS');
    });

    //autre syntaxe
    autreElementDOM = $('.galerie')[1]; // en utilisant la notation entre crochets , nous avons transformés l'objet jQuery en un objet du DOM classique. Attention : on ne peut donc plus lui appliquer des méthodes jQuery, mais uniquement du JavaScript ! Pour cibler l'indice 1 en jQuery, nous aurions utilisé eq(1) à la place de [1].









});