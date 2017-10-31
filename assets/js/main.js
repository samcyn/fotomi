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
        
    }
}