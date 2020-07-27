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

    // Smartphones Selector

    $(".phone-cards-selector-item").click(function () {
        $(".phone-cards-selector-back").toggleClass("active");
    });

    $(".phone-cards-selector-list-size").click(function () {
        $(".phone-cards-selector-back").removeClass("active");
        $(".phone-cards-selector-item-default, .phone-cards-selector-item-name, .phone-cards-selector-item-price").removeClass("active");
        $(".phone-cards-selector-list-name, .phone-cards-selector-list-price").removeClass("active");
        $(".phone-cards-selector-item-size").addClass("active");
        $(".phone-cards-selector-list-size").addClass("active");
    });

    $(".phone-cards-selector-list-name").click(function () {
        $(".phone-cards-selector-back").removeClass("active");
        $(".phone-cards-selector-item-default, .phone-cards-selector-item-size, .phone-cards-selector-item-price").removeClass("active");
        $(".phone-cards-selector-list-size, .phone-cards-selector-list-price").removeClass("active");
        $(".phone-cards-selector-item-name").addClass("active");
        $(".phone-cards-selector-list-name").addClass("active");
    });

    $(".phone-cards-selector-list-price").click(function () {
        $(".phone-cards-selector-back").removeClass("active");
        $(".phone-cards-selector-item-default, .phone-cards-selector-item-size, .phone-cards-selector-item-name").removeClass("active");
        $(".phone-cards-selector-list-size, .phone-cards-selector-list-name").removeClass("active");
        $(".phone-cards-selector-item-price").addClass("active");
        $(".phone-cards-selector-list-price").addClass("active");
    });

    // Smartphones Filter

    $(".smartphones-filter-item").click(function name(params) {
        $(this).children("div").children(".smartphones-filter-item-arrow").toggleClass("active");
    });

    $(".smartphones-item-producer").click(function () {
        $(".smartphones-filter-dropdown-producer").toggleClass("active");
    });
    $(".smartphones-filter-dropdown-producer-image-item").click(function () {
        $(".smartphones-filter-dropdown-producer-image-item").removeClass("active");
        $(this).addClass("active");
    });

    $(".smartphones-item-model").click(function () {
        $(".smartphones-filter-dropdown-model-content").toggleClass("active");
    });

    $(".smartphones-item-price").click(function () {
        $(".smartphones-filter-dropdown-price").toggleClass("active");
    });

    // Novetlies Tabs

    $(".novetlies-tabs-item").click(function () {
        $(".novetlies-tabs-item").removeClass("active");
        $(this).addClass("active");
    })


  });