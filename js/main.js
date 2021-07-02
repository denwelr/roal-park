
$(document).ready(function(){
    $(".header__burger").click(function(){
        $(this).toggleClass("active");
        $(".header__inner").toggleClass("active");
    });

    var $page = $('html, body');
    $('.header__link').click(function() {

        if($(".header__burger").hasClass("active")) {
            $(".header__burger").removeClass("active");
            $(".header__inner").removeClass("active");
        }
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return false;
    });
});