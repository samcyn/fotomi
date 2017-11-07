var app = {
    custombox: function(){
        var $btn = $(document).find('.modal-btn');
        if(!$btn){
            return;
        }
        $btn.on('click', function(){
            var effect = 'scale';
            var _id = $(this).data('id');
            
            if(_id === 'sign_up'){
                effect = 'flip';
            }
            // Instantiate new modal
            var modal = new Custombox.modal({
                content: {
                    effect: 'fadein',
                    target: '#' + _id
                },
                // Options
                loader : {
                    active: true,
                    color: '#000',
                    speed: 1500,
                }
            });
        

            
            document.addEventListener('custombox:content:open', function() {
                Custombox.modal.closeAll();
            });
            
            // Open
            modal.open();
        });
        
    },
    handler: function(arg){
        // after some time hide loader
        setTimeout( function() {
            loader.hide();

            pageWrap.find('.page_container').removeClass('show');
            
            $(arg).addClass('show');

        }, 2000 );
    },
    loaderHandler: function(){

        var pageWrap = $('.wrapper'),
        pages = $('.page_container');
        triggers = $('a.pageload-link');
        checker = '#page_1';
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