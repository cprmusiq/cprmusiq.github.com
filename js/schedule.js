$(document).ready(function() {
	//get today's date and make a circle
	var today = new Date();
	var dd = today.getDate();
	$('.calendar td').each(function(){
	    if($(this).text() == dd){
	      $(this).addClass("current-day");
	    }
	});  

	//set eventdats
	var eventDate1 = 26;
	var eventDate2 = 27;
	var eventDate3 = 28;

	$('.calendar td').each(function(){
	    if($(this).text() == eventDate1){
	    	$(this).addClass('event');
	    }else if ($(this).text() == eventDate2){
	    	$(this).addClass('event');
	    }else if ($(this).text() == eventDate3){
	    	$(this).addClass('event');
	    }
	});

	//show specific contents of events
	$('.event').click(function(){
        var theDate = $(this).text();
        $('.date-s').text(theDate);
        if(theDate == eventDate1){
          $('.scd01').toggle().siblings().hide();
        }else if(theDate == eventDate2){
          $('.scd02').toggle().siblings().hide();
        }else if(theDate == eventDate3){
          $('.scd03').toggle().siblings().hide();
        }
    });
});