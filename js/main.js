$(document).ready(function() {
    $('#search').hideseek({
      attribute: "data-img"
    });
});
$(document).ready(function() {
    $('.image').featherlight({
    });
});
$('a.image').featherlightGallery({
    type: 'image',
    previousIcon: '«',
    nextIcon: '»',
    galleryFadeIn: 300,

    openSpeed: 300
});
