const DETAILS = [
    {
        songID: 3,
        title: 'Eyes Only(아이즈온리)',
        date:'2017.12.05',
        content: '3rd single album'
    },
    {
        songID: 4,
        title: 'Love Bites(나도문득니가)',
        date:'2018.01.12',
        content: '4th single album'
    }
] 

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
    		timeout: 5000,	
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
        	timeout: 5000,
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

    //see more button
  	$('.see-more').on('click', 'button', function(event) {
  		event.preventDefault();
  		var wrapper = $(this).closest('.albums-wrapper');
  		wrapper.append(
  			`<section class="eyesonly">
                <div class="section-inner-wrap">
                    <div class="album-img">
                        <img src="images/eyesonly_cover.jpg" alt="eyesonly_cover">
                    </div>
                    <div class="album-info">
                        <p>${DETAILS[0].title}</p>
                        <p>${DETAILS[0].date}</p>
                        <p>${DETAILS[0].content}</p>
                    </div>
               </div>
            </section>
            <section class="love-bites">
                <div class="section-inner-wrap">
                    <div class="album-img">
                        <img src="images/lovebites_cover.jpg" alt="lovebites_cover">
                    </div>
                    <div class="album-info">
                        <p>${DETAILS[1].title}</p>
                        <p>${DETAILS[1].date}</p>
                        <p>${DETAILS[1].content}</p>
                    </div>
                </div>
            </section>`
         )
  		$(this).remove();
  	});
});