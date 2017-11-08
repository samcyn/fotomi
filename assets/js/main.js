var app = {
   
    loaderHandler: function(arg){

        var pageWrap = $('.wrapper'),
        pages = $('.page_container'),
        loader = new SVGLoader( document.getElementById( 'loader' ), { speedIn : 400, easingIn : mina.easeinout } );

        function init() {
            loader.show();
            setTimeout( function() {
                loader.hide();

                pageWrap.find('.page_container').removeClass('show');
                
                $(arg).addClass('show');
                window.location.hash = arg;
            }, 2000 ); 	
        }

        init();
    },
    pageLinks: function(){
        var _this = this,
       
        _links =  $('a.pageload-link');

        _links.on("click", function(e){
           
            e.preventDefault();

            var $this = $(this),
            _checker = window.location.hash || '#landing_page';
           
            console.log($this[0].hash, _checker);
            if($this[0].hash === _checker){
                return;
            }
            _checker = $this[0].hash;
            _this.loaderHandler(_checker);

        });
    },
    login_form: function(){
        var _this = this;
        $(document).on('submit', '#signin__form', function(e){
            e.preventDefault();
            _this.loaderHandler("#create_project");
        });
    },
    onPageRefresh: function(){
        var _this = this;
        var _hash = window.location.hash;
        if(_hash){
            _this.loaderHandler(_hash);
        }
    }
}