$(document).ready(function() {
	var today = new Date();
	var dd = today.getDate();
	$('.calendar td').each(function(){
	    if($(this).text() == dd){
	      $(this).addClass("current-day");
	    }
	});  

	$('.event').click(function(){
        var theDate = $(this).text();
        $('.date-s').text(theDate);
        if(theDate == 11){
          $('.scd01').show().siblings().hide();
        }else if(theDate == 22){
          $('.scd02').show().siblings().hide();
        }
    });
});