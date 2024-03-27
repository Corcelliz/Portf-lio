function smoothScrollingTo(target) {
    $('html,body').animate({ scrollTop: $(target).offset().top }, 600);
}
$('a[href^=\\#]').on('click', function (event) {
    event.preventDefault();
    smoothScrollingTo(this.hash);
});
