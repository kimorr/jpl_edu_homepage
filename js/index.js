$(document).ready(function(){

	var self = $(this)
	var resourceRollover = $(".resources_rollover")

	resourceRollover.mouseover(function(){
		{$(".rollover_info", this).css("display", "block");}
		{$(".download_icon img", this).css("width", "58");}

	})

	resourceRollover.mouseout(function(){
		{$(".rollover_info", this).css("display", "none");}
		{$(".download_icon img", this).css("width", "55");}
	})

	$(".expand_list_btn").click(function(){
		$(".selection_nav ul").toggle();
	})


})