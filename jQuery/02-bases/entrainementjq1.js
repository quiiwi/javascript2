//Ce fichier est en jQuery
/* 
    Document ready :
    Les deux lignes suivantes ont la même signification : exécuter le code JS après avoir changé le code HTML. Par conséquent, le lien vers la page JS peut se faire n'importe où dans la page HTML (dans le <head> ou avant la fermeture de <body>).

    $(function(){
        //ici vous mettez tout votre code jQuery
    });

    ou encore, autre syntaxe :
    $(document).ready(function(){
        //ici vous mettez tout votre code jQuery
    });

*/

$(function(){ //ce code s'éxécutera une fois le document HTML totalement chargé

    //----------
    // Fonction principale de jQuery, alias $, sélecteur et événement :
    $('#monBouton').click(function(){ //sélectionne la balise #monBouton et au clic appelle la fontion anonyme qui suit:
        $('#carre').hide();//sélectionne la balise #carre et l'efface
    });


    jQuery('#monBouton').click(function(){ 
        jQuery('#carre').hide();
    }); //en réalité le $ remplace le mot jQuery dont il est un alias. Les deux font la même chose : ils créent un OBJET jQuery.

    $('#carre').click(function(){ //sélectionne la balise #carre et au clic => sélectionne toutes les balises h3 et les efface (sans écrire de boucle).
        $('h3').hide();
    });

    // Le contaire de hide() c'est show() :
    $('.photo').dblclick(function(){ //sélectionne la balise .photo et au double-clic => sélectionne la balise #carré et l'affiche en 1000ms (=1s).
        $('#carre').show(1000); //hide() show() peuvent prendre un argument : une durée en ms, ou encore 'slow' ou 'fast'
    });

    // Pour alterner hide() et show() automatiquement : toggle()

    $('#interrupteur').click(function(){
        $('#on-off').toggle();
    });

    //-------------------
    // on() équivalent de addEventListener, et son contraire off :

    $('#monBouton').on('click',function(){
        alert('Déclenchement de la méthode on()');
    }); // on() permet d'associer un événement à un élément comme le ferait addEveent Listener() en JS "pur". La seule différence entre la syntaxe ligne 21 et celle-ci réside dans le fait que cette dernière marche aussi avec les éléments créés dynamiquement (= ajouter par le jQuery).
    
    $('#monBouton').off('click'); //en ajoutant cette ligne, on dissocie les clicks de l'élément #monBouton : les clics précédemment liés au bouton ne fonctionnent plus ! C'est un moyen simple de supprimer un événement.

    //--------------------
    //Evénement hover,modifier du CSS depuis jQuery :
    $('#vert').hover(function(){ 
        $('#rouge').css({
            width : '300px',
            'background-color' : 'yellow'
        });
    }, function(){
        $('#bleu').css({
            width : '300px',
            'background-color' : 'yellow'
        });
    });
    
    //l'événement hover est une combinaison de mouseover et mouseout en JS: il possède 2 fonctions anonymes qui s'executent l'une quand on entre, l'autre quand on sort de l'élément
    //la méthode css() permet de modifier des propriétées css écrites dans un objet : on les mets etre des acolades et sont séparés par une ",". Notez que les propriétés CSS qui contiennent un tiret s'écrivent dans des quotes.


    //--------------------
    //Récupérer ou modifier la valeur d'un input avec val()
    $('#mdp1').change(function(){
        var texte = $('#mdp1').val(); //val() sans argument retourne la valeur saisie dans le champ #mdp1 (getter)

        $('#mdp2').val(texte); //val(argument) permet de changer la valeur du champ #mdp2 (settergit )

    });

    //--------------
    //Le mot clé this :
    //this est nécessaire lorsqu'on sélectionne plusieurs éléments simultanements et qu'on a besoin d'en cibler un en particulier :

    $('input').focus(function(){
        $(this).css({ //this se réfère à l'input sur lequel je suis en focus précisément, sans sélectionner l'autre.
            border : '2px solid green'
        });
    });

    $('input').blur(function(){
        $(this).css({ //avec la méthode .css() je remets la bordure à son état initial (correspondant au string vide '') de l'input du quel je viens de sortir (=this)
            border : ''
        });
    });



    //------------------------
    //Accéder aux propriétés CSS avec css() (complément) :
    
    var position = $('#violet').css('position'); 

    console.log('La propriété position du div est :' + position); // la méthode css() avec seulement une propriété sous forme de stringen argument est un setter : elle fournit la valeur de la propriété spécifiée, même si celle-ci n'est pas dans un attribut style (va chercher y compris dans les feuilles de styles) 



    //------------------------
    // Accéder aux attributs des balises avec attr() :
    
    if ($('.modifAlt').attr('alt') == '') { // .attr() avec un seul argument est un getter : il permet de récupérer la valeur de l'attribut précisé (ici de alt).
        $('.modifAlt').attr('alt', 'paysage'); // .attr() avec deux arguments est un setter : il permet d'attribuer une valeur à un attribut : attr('attribut', 'valeur').
    }


    //-------------------------
    //Modifier le contenu d'une balise avec .text() ou .html()
    // .html() équivaut à innerHTML :
    $('.texte').eq(0).html('<span>Ceci est un texte ajouté avec la méthode html()</span>');//les balises HTML sont interprotées et donc insérées dans le code HTML. La méthode .eq() permet de cibler l'élément dont l'indice est spécifié dans les (), ici la première .texte

    // .text() équivaut à texteContent :
    $('.texte').eq(1).text('<span>Ceci est un texte ajouté avec la méthode text()</span>');//dans la méthode .texte() tout est considéré comme du texte brut, y compris les éventelles balises

    //Note : text() et html() sans argument sont des getters : ils récupèrent le contenu de la balise sélectionnée.


    //-------------------------
    //Ajouter ou retirer une class (définie dans le CSS) à un élément :
    /* $('#survol').mouseenter(function(){
        $(this).addClass('rouge'); //ajoute la classe "rouge" (prévue dans le CSS) à l'élément
    });

    $('#survol').mouseleave(function(){
        $(this).removeClass('rouge'); //retire la classe "rouge" de l'élément
    }); */


    $('#survol').hover(function(){
        $(this).toggleClass('rouge'); //fait la même chose qu'en haut en une seule ligne
    });



    $('#classBleu').click(function(){
        $('#survol').toggleClass('bleu'); //alterne addClass() et removeClass() sur l'élément #survol (différent du bouton #classBleu : on n'utilise donc pas $(this) !)
    });

    // Parcourir les éléments sélectionnées avec une boucle each() :

    $('h4').each(function(i){ // each() parcourt tous les <h4> et exécute la fonction pour chacun (=each) d'entre-eux. Cette fonction possède un paramètre (= indice) qui correspond à l'indice de l'élément sur lequel la boucle se trouve

        // $(this).text('Ce <h4> a pour indice le numéro : ' + i); //ajoute le texte au <h4> sur lequel on se trouve précisément à chaque tour de boucle (=$(this))

        $('h4').eq(i).text('Ce <h4> a pour indice le numéro : ' + i); 

        //on ajoute la classe "rouge" aux h4 d'indice pair :
        if( i % 2 == 0){ //signifie que indice est pair : on ajoute donc la classe "rouge" à chauqe élément d'indice pair
            $(this).addClass('rouge'); //
        }

    });

    ///--------------------------
    //Les pseudo-sélecteurs spécifiques à jQuery : first, :last, :visible

    // :visible et :hidden :

    $('#afficher').click(function(){
        $('#galerie img:hidden').css({ // sélectionne les images cachées et leur met une opacité de 0.2
            opacity :  0.2
        });
        $('#galerie img').show(); // puis on affiche toutes les images (pour voir le résultat)
    });

    $('#effacer').click(function(){
        $('#galerie img').hide();;
    });

    // :first et :last :
    $('#afficher-premier').click(function(){
        $('#galerie img:first').show(); // sélectionne la première image et l'affiche. Marche aussi avec :last pour la denrière.Si vous voulez cibler une imgae au milieu, utilisez la méthode eq().

        // On peut combiner les pseudos-sélecteurs :
        console.log($('#galerie img:hidden:first').attr('src')); //on combine :hidden:first pour afficher la source de la première image cachée. Attention à l'ordre, :hidden d'abord puis :first


       /*  $('#galerie img').eq(1).show(); */
    });

}); //FIN DU DOCUMENT READY (à ne pas supprimer)