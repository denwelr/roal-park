
$(document).ready(function(){
    $(".header__burger").click(function(){
        $(this).toggleClass("active");
        $(".header__inner").toggleClass("active");
    });

    $(".select").click(function(){
        $(this).children(".select__options").toggleClass("opened");
        return;
    });

    $(".info__play").click(function(){
        if(screen.width <= 769) {
            window.open('https://www.youtube.com/watch?v=Ilc6ddYgVKI');
        } else {
            window.location.href = "#video";
        }   
        return;
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
        return;
    });

    $(".modal__area").click(function(){
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 400);
        return;
    });
});