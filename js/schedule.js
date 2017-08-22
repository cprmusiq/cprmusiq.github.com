$(document).ready(function() {
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