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

    





}); //FIN DU DOCUMENT READY (à ne pas supprimer)