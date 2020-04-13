$(document).ready(function(){
	/* After the document loads, wait 2 seconds then fade out the intro overlay */
	setTimeout(function(){
		$("#intro").addClass("hide");
	}, 2000);
	
	var doors = document.getElementsByClassName("door");
	for (var i = 0; i < doors.length; i++){
		doors[i].addEventListener("click", function(e){
			e.preventDefault();
			this.classList.toggle("doorOpen");
			var this_href = $(this).children("a:first").attr("href");
			setTimeout(function(){
				window.location = this_href;
			}, 1500);
		}, false);
	}
});