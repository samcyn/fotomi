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
    loaderHandler: function(){
        var pageWrap = document.getElementsByClassName( 'wrapper' )[0],
        pages = [].slice.call( pageWrap.querySelectorAll( '.page_container' ) ),
        currentPage = 0,
        triggerLoading = [].slice.call( pageWrap.querySelectorAll( 'a.pageload-link' ) ),
        loader = new SVGLoader( document.getElementById( 'loader' ), { speedIn : 400, easingIn : mina.easeinout } );

        function init() {
            triggerLoading.forEach( function( trigger ) {
                trigger.addEventListener( 'click', function( ev ) {
                    ev.preventDefault();
                    loader.show();
                    // after some time hide loader
                    setTimeout( function() {
                        loader.hide();

                        classie.removeClass( pages[ currentPage ], 'show' );
                        // update..
                        currentPage = currentPage ? 0 : 1;
                        classie.addClass( pages[ currentPage ], 'show' );

                    }, 200000 );
                } );
            } );	
        }

        init();
    }
}