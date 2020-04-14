/* Assign background images utilizing the Backstretch plugin */
if($('.good-place').length){
	$.backstretch('../images/good-place-images/good-place-background.jpg');
} else if($('.bad-place').length) {
	$.backstretch('../images/bad-place-images/bad-place-background.jpg');
}
/* Initialize light gallery on the good/bad place pages */
$(document).ready(function() {
	$('#lightgallery').lightGallery();
});
/* Initialize the Slick plugin for testimonial slides */
$('.carousel').slick({
	dots: true,
	infinite: true,
	autoplay: true,
	autoplaySpeed: 5500
});
/* Call hover on navigation doors when their label is hovered */
$('.nav-item a').hover(function(){
	toggleHover(this);
}, function(){
	toggleHover(this);
});
/* Toggles hover class for navigation elements - avoids repeating code */
function toggleHover(e){
	var nav_img = $(e).find('img');
	if (nav_img.hasClass('hover-bad') || nav_img.hasClass('hover-lobby') || nav_img.hasClass('hover-good')){
		nav_img.removeClass();
	} else {
		var nav_type = $(e).attr('class').split('-')[1];
		nav_img.addClass('hover-' + nav_type);
	}
}