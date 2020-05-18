$(document).ready(function() {
 
    $('.slick').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        arrows: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    });


    $("ul.tabs__caption").on("click", "li:not(.active)", function() {
        $(this)
            .addClass("active-caption")
            .siblings()
            .removeClass("active-caption")
            .closest("div.tabs")
            .find("div.tabs__content")
            .removeClass("active")
            .eq($(this).index())
            .addClass("active");
    });

});



var alert = document.getElementById("alert");
var menu = document.getElementById("menu");
var loginContent = document.getElementById("login__content");
var flag = document.getElementById("login__flag");

document.getElementById('close-alert').addEventListener('click', function () {
    alert.classList.add("hide");
});

document.getElementById('close-menu').addEventListener('click', function () {
    menu.classList.add("hide");
});

document.getElementById('burger').addEventListener('click', function () {
    menu.classList.remove("hide");
});

document.getElementById('login').addEventListener('click', function () {

    if(loginContent.classList.contains('open')){
        loginContent.classList.remove("open");
        flag.classList.remove("rotate");
    }else{
        loginContent.classList.add("open");
        flag.classList.add("rotate");
    }

});

// Липкий хедер
window.onscroll = function showHeader() {
    var header = document.querySelector('.top-line');
    var search = document.querySelector('.form--header');
    if(window.pageYOffset >= 300){
        header.classList.add('header_fixed');
        if (window.innerWidth >= 1000){
            search.classList.add('show');
        }else {
            search.classList.remove('show');
        }

    } else{
        header.classList.remove('header_fixed');
        search.classList.remove('show');
    }
};
// Горизонтальный скролл
document.querySelectorAll(".video-mobile").forEach(function(item) {
    item.addEventListener('wheel', function(event) {
        if (event.deltaMode == event.DOM_DELTA_PIXEL) {
            var modifier = 1;
            // иные режимы возможны в Firefox
        } else if (event.deltaMode == event.DOM_DELTA_LINE) {
            var modifier = parseInt(getComputedStyle(this).lineHeight);
        } else if (event.deltaMode == event.DOM_DELTA_PAGE) {
            var modifier = this.clientHeight;
        }
        if (event.deltaY != 0) {
            // замена вертикальной прокрутки горизонтальной
            this.scrollLeft += modifier * event.deltaY;
            event.preventDefault();
        }
    });
});


