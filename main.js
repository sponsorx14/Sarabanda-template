// CLICK EVENT (POSITION STAIC)
$(".navbar-toggle").on("click", function(){
  $(".header-title-box").toggleClass('static');
});
// SCROLLTOP
jQuery(document).ready(function ($) {
  $('.nav-tabs a, .nav-tabs button').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
    $('a.scrolls, button.scrolls').on('click', function (e) {
        var href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 2000);
        e.preventDefault();
    });
});
