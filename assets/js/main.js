var app = {
   
    loaderHandler: function(){

        var pageWrap = $('.wrapper'),
        pages = $('.page_container'),
        triggers = $('a.pageload-link'),
        checker = '#landing_page',
        //console.log(window.location.hash);
        loader = new SVGLoader( document.getElementById( 'loader' ), { speedIn : 400, easingIn : mina.easeinout } );

        function init() {
            
            triggers.on('click', function(){
                var $this = $(this);
                if($this[0].hash === checker){
                    return;
                }
                loader.show();
                
                checker = $this[0].hash;
                
                // after some time hide loader
                setTimeout( function() {
                    loader.hide();

                    pageWrap.find('.page_container').removeClass('show');
                    
                    $($this[0].hash).addClass('show');

                }, 2000 );
            });	
        }

        init();
    }
}