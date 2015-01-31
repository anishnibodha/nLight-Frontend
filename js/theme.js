// JavaScript Document
$('.menu-wrap').hover(function(){
		$(this).stop().animate({width:'250px'},200)
	}, function(){
		$(this).stop().animate({width:'60px'},200)
	});
	
	/*-- --*/
	$(".turn_arrow").rotate({animateTo:45},0);
	$('.control-icon').click(function(e) {
        var id = $(this).attr('id');
		var id_val = id.substring(4);
		$('.control-icon').removeClass('select');
		$(this).addClass('select');
		
		if(id_val == 0){
			$(".turn_arrow").rotate({ animateTo:45 });
		}
		else if (id_val == 90){
			$(".turn_arrow").rotate({ animateTo:135 });
		}
		else if (id_val == 180){
			$(".turn_arrow").rotate({ animateTo:225 });
		}
		else if (id_val == 270){
			$(".turn_arrow").rotate({ animateTo:315 });
		}else{}
		
    });
	
	/*-- --*/
	$("#slide1").bind("slider:changed", function (event, data) {
		$("#output1").html(data.value.toFixed(0));	  	
    });
	
	/*-- --*/
	$('.switch').click(function(e) {
		if($(this).hasClass("red")){
			$(this).removeClass('red');
			$(this).addClass('green');
			$('.switch .circle').stop().animate({left:'30'}, 200);
		}else if($(this).hasClass("green")){
			$(this).removeClass('green');
			$(this).addClass('red');
			$('.switch .circle').stop().animate({left:'0px'}, 200);
		}
    });
	
	/*-- --*/
	$('.icon_light').each(function() {
         $(this).qtip({ content: { text: $($(this).attr('href')) },
			 show: 'click',
			 hide: 'unfocus',
			 position: { my: 'bottom left', at: 'top right'}
         });
     });
	 /*-- --*/
	 $('.icon_light').click(function(e) {
		 var p = $(this).attr('title');
		 $('.tool-icon-wrap').css({'background':"url(images/"+p+".png) no-repeat center"});
	 });