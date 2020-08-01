$(document).ready(function(){
    
    $("#home-page-carousel").owlCarousel({
        loop:true,
        nav:true,
        items: 1,
    });

    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        // direction: 'horizontal',
        slidesPerView: 3,
        slidesPerGroup: 3,
        loop: true,
        cssMode: true,
        keyboard: true,
        spaceBetween: 10,
      
        // If we need pagination
        // pagination: {
        //   el: '.swiper-pagination',
        // },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      })

    var mySwiper = new Swiper('.swiper-container-2', {
        // Optional parameters
        // direction: 'horizontal',
        slidesPerView: 4,
        slidesPerGroup: 4,
        loop: true,
        cssMode: true,
        keyboard: true,
        spaceBetween: 30,
      
        // If we need pagination
        // pagination: {
        //   el: '.swiper-pagination',
        // },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      })

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
    });

    // Product Card

    $(".product-images-dot-first").click(function () {
        $(".product-images-dot-second, .product-images-dot-third, .product-images-dot-fourth, .product-images-dot-fifth").removeClass("active");
        $(".product-images-dot-first").addClass("active");
        $(".product-images-switcher-main-second, .product-images-switcher-main-third, .product-images-switcher-main-fourth, .product-images-switcher-main-fifth").removeClass("active")
        $(".product-images-switcher-main-first").addClass("active");
    });

    $(".product-images-dot-second").click(function () {
        $(".product-images-dot-first, .product-images-dot-third, .product-images-dot-fourth, .product-images-dot-fifth").removeClass("active");
        $(".product-images-dot-second").addClass("active");
        $(".product-images-switcher-main-first, .product-images-switcher-main-third, .product-images-switcher-main-fourth, .product-images-switcher-main-fifth").removeClass("active")
        $(".product-images-switcher-main-second").addClass("active");
    });

    $(".product-images-dot-third").click(function () {
        $(".product-images-dot-first, .product-images-dot-second, .product-images-dot-fourth, .product-images-dot-fifth").removeClass("active");
        $(".product-images-dot-third").addClass("active");
        $(".product-images-switcher-main-first, .product-images-switcher-main-second, .product-images-switcher-main-fourth, .product-images-switcher-main-fifth").removeClass("active")
        $(".product-images-switcher-main-third").addClass("active");
    });

    $(".product-images-dot-fourth").click(function () {
        $(".product-images-dot-first, .product-images-dot-second, .product-images-dot-third, .product-images-dot-fifth").removeClass("active");
        $(".product-images-dot-fourth").addClass("active");
        $(".product-images-switcher-main-first, .product-images-switcher-main-second, .product-images-switcher-main-third, .product-images-switcher-main-fifth").removeClass("active")
        $(".product-images-switcher-main-fourth").addClass("active");
    });

    $(".product-images-dot-fifth").click(function () {
        $(".product-images-dot-first, .product-images-dot-second, .product-images-dot-third, .product-images-dot-fourth").removeClass("active");
        $(".product-images-dot-fifth").addClass("active");
        $(".product-images-switcher-main-first, .product-images-switcher-main-second, .product-images-switcher-main-third, .product-images-switcher-main-fourth").removeClass("active")
        $(".product-images-switcher-main-fifth").addClass("active");
    });

    // Model pick

    $(".product-lower-form-model-list-item").click(function () {
       $(".product-lower-form-model-list-item").removeClass("active"); 
       $(this).addClass("active"); 
    });

    // Price

    $(".product-lower-form-color-item-image").click(function () {
        $(".product-lower-form-color-item-image").removeClass("active");
        $(this).addClass("active");
    });

    // Delete buttons

    $(".bag-page-upper-clean-button-wrapper").click(function () {
        $(".bag-page-middle-card").addClass("turn-off");
        $(".bag-page-line").addClass("turn-off");
    });

    $(".bag-page-middle-card-delete-wrapper").click(function () {
        $(this).parents("div").parents(".bag-page-middle-card-price-and-delete-item").parents(".bag-page-middle-card-content").parents(".bag-page-middle-card").addClass("turn-off");
    });

    // Modal Window

    $(".your-purchase-order-button").click(function () {
        $(".focus").addClass("active");
        $(".modal").addClass("active");
        $(".home-page").addClass("turn-off");
    });

    $(".modal-button").click(function () {
        $(".focus").removeClass("active");
        $(".modal").removeClass("active");
        $(".home-page").removeClass("turn-off");
    });
    
    // Bag drop panel

    $(".sn-bag-item").click(function () {
        $(".bag-drop-panel").toggleClass("active");
    })


  });