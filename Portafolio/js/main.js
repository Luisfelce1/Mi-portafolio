$(document).ready(function(){

    var banner= {
        padre: $('#banner')
    }
console.log('#banner');
    banner.padre.children('.slide').first().css({
        'left':0
    });

    var altoBanner = function(){
        var alto= banner.padre.children('.slide').outerheight();
        banner.padre.css({
            'height': alto + 'px'

        });
        console.log(alto);
    }
    altoBanner();

    $(window).resize(function(){
        altoBanner();

// -----------------------------------------
// -------banner
// -----------------------------------------

            // Bontón siguiente
            $('#banner-next').on('click', function(e){
                e.preventDefault();

                if(banner.posicion < banner.numeroSlides){

                    banner.padre.children().not('.active').css({

                        'left': '100%'
                    });

                    $('#banner .active').removeClass('active').next().addClass('active').animate({
                        'left': '0'

                    });

                    $('#banner .active').prev().animate({
                        'left': '-100%'
                    });
                    
                    banner.posicion= banner.posicion + 1;
            } else {
                $('#banner .active').removeClass('active');
                banner.padre.children('.slide').first().addClass('active');

                banner.posicion = 1;
            }
    });
});