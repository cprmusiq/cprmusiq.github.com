$(document).ready(function() {
	//landing page
	$.ajax('home.html', {
          success: function(response) {
            $('.main').html(response);
          }
    });

    //navigations
	$('.navigation').on('click', '.home-li', function(e) {
		e.preventDefault();
        $.ajax('home.html', {
    		timeout: 3000,	
	        success: function(response) {
	        	$('.main').html(response);
	        },
	        beforeSend: function() {
            	$('.main').addClass('loading');
          	},
          	complete: function() {
            	$('.main').removeClass('loading');
          	}
        });
  	});
  	$('.navigation').on('click', '.albums-li', function(e) {
		e.preventDefault();
        $.ajax('albums.html', {
        	timeout: 3000,
        	success: function(response) {
            	$('.main').html(response);
          	},
          	beforeSend: function() {
            	$('.main').addClass('loading');
	      	},
	      	complete: function() {
	        	$('.main').removeClass('loading');
	      	}
        });
  	});
});