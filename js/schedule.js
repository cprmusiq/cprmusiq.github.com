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
	var eventDate1 = 25;
	var eventDate2 = null;
	var eventDate3 = null;

	//show specific contents of events
	$('.event').click(function(){
        var theDate = $(this).text();
        $('.date-s').text(theDate);
        if(theDate == eventDate1){
          $('.scd01').show().siblings().hide();
        }else if(theDate == eventDate2){
          $('.scd02').show().siblings().hide();
        }
    });
});