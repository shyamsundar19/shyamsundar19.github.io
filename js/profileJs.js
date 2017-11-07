//Scroll navigation
   $(document).ready(function () {     
            $('a[href^="#"]').on('click', function (e) {
                e.preventDefault();

                var target = this.hash;
                var $target = $(target);

                $('html, body').stop().animate({
                    'scrollTop': $target.offset().top
                }, 600, 'swing', function () {
                    window.location.hash = target;
                });
            });
        }); 
//Reset navigation bar
	$(document).on('click', '.navbar-collapse.in', function (e)
	 {
   	 	if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle')
		 {
        		$(this).collapse('hide');
    		}
	}); 
