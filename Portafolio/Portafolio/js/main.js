$(document).  ready(function(){

    var banner={
        padre: $('#banner'),
        numeroSlides: $('banner').childrem('.slide').length,
        posicion: 1
    }

    banner.padre.childrem('.slide').first().css({
        'left':0
    });

    var altoBanner = function(){
        var alto= banner.padre.childrem('.slide').outerheight();
        banner.padre.css({
            'height': alto + 'px'

        });
        console.log(alto);
    }
    altoBanner();

    $(window).resize(function(){
        altoBanner();
    });
});