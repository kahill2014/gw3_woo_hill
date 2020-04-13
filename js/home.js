/* After the document loads, wait 2 seconds then fade out the intro overlay */
$(document).ready(function(){
	setTimeout(function(){
		$("#intro").addClass("hide");
	}, 2000);
});