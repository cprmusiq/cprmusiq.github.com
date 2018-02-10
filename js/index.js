$(document).ready(function() {
	$.ajax('home.html', {
          timeout: 3000,
          success: function(response) {
            $('.main').html(response).show();
          }
    });
	$('.navigation').on('click', '.home-li', function(e) {
		$('.main > div').remove();
		e.preventDefault();
        $.ajax('home.html', {
          timeout: 3000,
          success: function(response) {
            $('.main').html(response).show();
          }
        });
  	});
  	$('.navigation').on('click', '.albums-li', function(e) {
		$('.main > div').remove();
		e.preventDefault();
        $.ajax('albums.html', {
          timeout: 3000,
          success: function(response) {
            $('.main').html(response).show();
          }
        });
  	});
});