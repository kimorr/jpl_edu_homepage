$(document).ready(function(){

	var self = $(this)

	// HAMBURGER MENU

	$(".hamburger_btn").click(function(e){
		$(".mobile_nav").toggle();
		e.preventDefault();	
	})

	// ROLLOVER LINK

	var rollover = $(".rollover")

	rollover.mouseover(function(){
		{$(".rollover_info", this).css("display", "block");}
		{$(".download_icon img", this).css("width", "58");}

	})

	rollover.mouseout(function(){
		{$(".rollover_info", this).css("display", "none");}
		{$(".download_icon img", this).css("width", "55");}
	})

	// EXPAND CTA LIST

	$(".expand_list_btn").click(function(){
		$(".selection_nav ul").toggle();
	})

	// SLIDESHOW

	$(".slide_forward").click(function(){
		
	})

})