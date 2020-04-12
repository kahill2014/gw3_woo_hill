if($('.good-place').length){
	$.backstretch('../images/good-place-images/good-place-background.jpg');
} else if($('.bad-place').length) {
	$.backstretch('../images/bad-place-images/bad-place-background.jpg');
}

$(document).ready(function() {
	$('#lightgallery').lightGallery();
});
$('.carousel').slick({
	dots: true,
	infinite: true,
	autoplay: true,
	autoplaySpeed: 5500
});
