var app = {
    custombox: function(){
        var $btn = $(document).find('.modal_btn');
         
        if(!$btn){
            return;
        }
        $btn.on('click', function(){
        
            var _dataAttr = $(this).data("modal");
  
            // Instantiate new modal
            var modal = new Custombox.modal({
                content: {
                    effect: 'fadein',
                    target: '#' + _dataAttr
                },
                // Options
                loader : {
                    active: true,
                    color: '#000',
                    speed: 1500,
                }
            });
            
            // Open
            modal.open();
        });
        
    },
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
        var _this = this;
       
       // _links =  $('a.pageload-link');
        $(document).on("click", 'a.pageload-link', function(e){
            e.preventDefault();
            //close navbar 
            //$('html').removeClass('nav-open'); 
            $('html').removeClass('nav-open');
            $('#bodyClick').remove();

            var $this = $(this),
            _checker = window.location.hash || '#landing_page';
            
            console.log($this[0].hash, _checker);
            if($this[0].hash === _checker){
                return;
            }
            _checker = $this[0].hash;
            _this.loaderHandler(_checker);

        });

        // _links.on("click", function(e){
           
        //     e.preventDefault();

        //     var $this = $(this),
        //     _checker = window.location.hash || '#landing_page';
           
        //     console.log($this[0].hash, _checker);
        //     if($this[0].hash === _checker){
        //         return;
        //     }
        //     _checker = $this[0].hash;
        //     _this.loaderHandler(_checker);

        // });
    },
    login_form: function(){
        var _this = this;
        $(document).on('submit', 'form', function(e){
            e.preventDefault();
            //console.log($(this).attr('id'));
            var formInstance = $(this).parsley();
            
            if(!formInstance.isValid()){
                return;
            }

            var _id = $(this).attr('id');
            if(_id === 'signin__form'){
                //_this.loaderHandler("#projects_2");
                window.location.href = 'projects.html';
                return;
            }
            else if(_id === 'signup__form'){
                //_this.loaderHandler("#create_project");
                window.location.href = 'projects.html#create_project';
                //_this.loaderHandler("#create_project");
                return;
            }
            else if(_id === 'modal__form'){
                 Custombox.modal.close()
                _this.loaderHandler("#projects_3");
                return;
            }
            else{
                _this.loaderHandler("#image_upload");
            }

           
        });
    },
    onPageRefresh: function(){
        var _this = this;
        var _hash = window.location.hash;
        if(_hash){
            _this.loaderHandler(_hash);
        }
    },
    fileReaderCtrl: function(){
        $("#file-upload").on('change', function(){
            var _name = $(this)[0].files[0].name;
            $("#file_name").text(_name);
        });

    },
    sidebarController: function(){
        
        var navbar_initialized = false;

        lbd = {
            misc:{
                navbar_menu_visible: 0
            },
            initRightMenu: function(){  
                if(!navbar_initialized){
                    //clone the navbar
                    var $navbar = $('nav').find('.navbar-collapse').first().clone(true);
                    
                    console.log($navbar);
                    
                    
                    //define an empty list to add items..
                    var ul_content = '';
                    
                    //add the content from the regular header to the right menu
                    $navbar.children('ul').each(function(){
                        ul_content +=   $(this).html();  
                    });
                    
                    ul_content = '<aside class="rightSideBar"><ul class="menus">' + ul_content + '</ul></aside>';
                    
                    $('body').append(ul_content);
                
                    var $toggle = $('.navbar-toggler');
                    
                    $toggle.click(function (){    
                        if(lbd.misc.navbar_menu_visible == 1) {
                            $('html').removeClass('nav-open'); 
                            lbd.misc.navbar_menu_visible = 0;
                            $('#bodyClick').remove();
                            setTimeout(function(){
                                $toggle.removeClass('toggled');
                            }, 400);
                        
                        } else {
                            setTimeout(function(){
                                $toggle.addClass('toggled');
                            }, 430);
                            
                            var div = '<div id="bodyClick"></div>';
                            $(div).appendTo("body").click(function() {
                                $('html').removeClass('nav-open');
                                lbd.misc.navbar_menu_visible = 0;
                                $('#bodyClick').remove();
                                setTimeout(function(){
                                    $toggle.removeClass('toggled');
                                }, 400);
                            });
                        
                            $('html').addClass('nav-open');
                            lbd.misc.navbar_menu_visible = 1;
                            
                        }
                    });
                    navbar_initialized = true;
                }

            }
        }

        // Init navigation toggle for small screens   
        if($(window).width() <= 991){
            lbd.initRightMenu();   
        }

        // activate collapse right menu when the windows is resized 
        $(window).resize(function(){
            if($(window).width() <= 991){
                lbd.initRightMenu();   
            }
        });

    },
    sideMenuController: function(){
        
        var navbar_initialized = false;

        lbd = {
            misc:{
                navbar_menu_visible: 0
            },
            initRightMenu: function(){  
                if(!navbar_initialized){
                    // //clone the navbar
                    // var $navbar = $('nav').find('.navbar-collapse').first().clone(true);
                    
                    // console.log($navbar);
                    
                    
                    // //define an empty list to add items..
                    // var ul_content = '';
                    
                    // //add the content from the regular header to the right menu
                    // $navbar.children('ul').each(function(){
                    //     ul_content +=   $(this).html();  
                    // });
                    
                    // ul_content = '<aside class="rightSideBar"><ul class="menus">' + ul_content + '</ul></aside>';
                    
                    // $('body').append(ul_content);
                
                    var $toggle = $('.sidebar-toggler');
                    
                    $toggle.click(function (){    
                        if(lbd.misc.navbar_menu_visible == 1) {
                            $('html').removeClass('nav-open'); 
                            lbd.misc.navbar_menu_visible = 0;
                            $('#bodyClick').remove();
                            setTimeout(function(){
                                $toggle.removeClass('toggled');
                            }, 400);
                        
                        } else {
                            setTimeout(function(){
                                $toggle.addClass('toggled');
                            }, 430);
                            
                            var div = '<div id="bodyClick"></div>';
                            $(div).appendTo("body").click(function() {
                                $('html').removeClass('nav-open');
                                lbd.misc.navbar_menu_visible = 0;
                                $('#bodyClick').remove();
                                setTimeout(function(){
                                    $toggle.removeClass('toggled');
                                }, 400);
                            });
                        
                            $('html').addClass('nav-open');
                            lbd.misc.navbar_menu_visible = 1;
                            
                        }
                    });
                    navbar_initialized = true;
                }

            }
        }

        // Init navigation toggle for small screens   
        
        lbd.initRightMenu();
        // activate collapse right menu when the windows is resized 
        $(window).resize(function(){
            if($(window).width() <= 991){
                lbd.initRightMenu();   
            }
        });

    },
    menuController:function(){
        $('.rightSideBar .nav-link').on('click', function(){
            $('.rightSideBar .menus').find('.active').removeClass('active');
            $(this).parent().addClass('active');
        })
       
    }
    
}