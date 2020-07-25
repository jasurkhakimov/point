$(document).ready(function(){
    
    $("#home-page-carousel").owlCarousel({
        loop:true,
        nav:true,
        items: 1,
    });

    // Language Switcher

    $(".language").click(function () {        
        $(".language-list").toggleClass("active");
    });

    $(".language-list-russian").click(function () {
        $(".language-list").removeClass("active");
        $(".language-english, .language-uzbek").removeClass("active");
        $(".language-list-english, .language-list-uzbek").removeClass("active");
        $(".language-list-russian").addClass("active");
        $(".language-russian").addClass("active");
    });

    $(".language-list-english").click(function () {
        $(".language-list").removeClass("active");
        $(".language-russian, .language-uzbek").removeClass("active");
        $(".language-list-russian, .language-list-uzbek").removeClass("active");
        $(".language-list-english").addClass("active");
        $(".language-english").addClass("active");
    });

    $(".language-list-uzbek").click(function () {
        $(".language-list").removeClass("active");
        $(".language-russian, .language-english").removeClass("active");
        $(".language-list-russian, .language-list-english").removeClass("active");
        $(".language-list-uzbek").addClass("active");
        $(".language-uzbek").addClass("active");
    });

    // Bag

    bag1();

    function bag1() {
        if($(".novetly-availability-bag.active")) {
            $(".novetly-availability-bag-wrapper").click(function () {
                $(this).children(".novetly-availability-bag").removeClass("active")
                $(this).children(".novetly-availability-check-mark").addClass("active")
                bag2();
            });
        }
    }
    function bag2() {
        if($(".novetly-availability-check-mark.active")) {
            $(".novetly-availability-bag-wrapper").click(function () {
                $(this).children(".novetly-availability-check-mark").removeClass("active")
                $(this).children(".novetly-availability-bag").addClass("active")
                bag1();
            });
        }
    }


  });