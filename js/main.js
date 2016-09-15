$(document).ready(function() {
    $('#search').hideseek({
      attribute: "data-img"
    });
});
$(document).ready(function() {
    $('.image').featherlight({
    });
});
$.featherlightGallery.prototype.afterContent = function() {
  var caption = this.$currentTarget.find('img').attr('alt');
  this.$instance.find('.caption').remove();
  $('<div class="caption">').text(caption).appendTo(this.$instance.find('.featherlight-content'));
};
$('a.image').featherlightGallery({
    type: 'image',
    galleryFadeIn: 300,

    openSpeed: 300
});
