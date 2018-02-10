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
          success: function(response) {
            $('.main').html(response);
          }
        });
  	});
  	$('.navigation').on('click', '.albums-li', function(e) {
		e.preventDefault();
        $.ajax('albums.html', {
          success: function(response) {
            $('.main').html(response);
          }
        });
  	});
});