$(document).ready(function () {

    $(".home-page-carousel").owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            576: {
                items: 1,
                nav: false,

            },
            768: {
                items: 1,
                nav: true,
            }
        }
    });

    $(".home-page-carousel-2").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        items: 1
    });

    $(".owl-next").html('<svg width="14" height="14" class="header-arrow-next" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.841477 6.01732C0.898762 6.00803 0.956735 6.00374 1.01474 6.00449H10.8915L10.6761 5.90432C10.4656 5.80468 10.2741 5.66908 10.1101 5.50364L7.34046 2.73396C6.97569 2.38575 6.91439 1.82558 7.19521 1.40672C7.52205 0.960373 8.14882 0.863459 8.5952 1.19029C8.63126 1.21671 8.66554 1.24551 8.69775 1.2765L13.7062 6.28496C14.0976 6.67594 14.098 7.31016 13.707 7.70157C13.7067 7.70183 13.7065 7.70211 13.7062 7.70236L8.69775 12.7108C8.30603 13.1014 7.6718 13.1006 7.28114 12.7088C7.2504 12.678 7.2217 12.6452 7.19521 12.6107C6.91439 12.1918 6.97569 11.6316 7.34046 11.2834L10.1051 8.50872C10.2521 8.3616 10.4211 8.23823 10.606 8.1431L10.9065 8.00787H1.06986C0.558155 8.02687 0.109209 7.66943 0.0130777 7.16645C-0.0754786 6.62037 0.295399 6.10591 0.841477 6.01732Z" fill="#E13439"/></svg>');

    $(".owl-prev").html('<svg width="14" height="14" class="header-arrow-prev" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.1585 6.01732C13.1012 6.00803 13.0432 6.00374 12.9852 6.00449H3.10851L3.32387 5.90432C3.53439 5.80468 3.7259 5.66908 3.88983 5.50364L6.65951 2.73396C7.02428 2.38575 7.08557 1.82558 6.80476 1.40672C6.47792 0.960373 5.85115 0.863459 5.40477 1.19029C5.36871 1.21671 5.33443 1.24551 5.30222 1.2765L0.293755 6.28496C-0.0976562 6.67594 -0.0980006 7.31016 0.292973 7.70157C0.293223 7.70183 0.293505 7.70211 0.293755 7.70236L5.30222 12.7108C5.69394 13.1014 6.32817 13.1006 6.71883 12.7088C6.74957 12.678 6.77827 12.6452 6.80476 12.6107C7.08557 12.1918 7.02428 11.6316 6.65951 11.2834L3.89484 8.50872C3.74787 8.3616 3.5789 8.23823 3.39399 8.1431L3.09349 8.00787H12.9301C13.4418 8.02687 13.8908 7.66943 13.9869 7.16645C14.0754 6.62037 13.7046 6.10591 13.1585 6.01732Z" fill="#E13439"/></svg>');


    $(".swiper-button-next").html('<svg width="14" height="14" class="swiper-arrow-next" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.841477 6.01732C0.898762 6.00803 0.956735 6.00374 1.01474 6.00449H10.8915L10.6761 5.90432C10.4656 5.80468 10.2741 5.66908 10.1101 5.50364L7.34046 2.73396C6.97569 2.38575 6.91439 1.82558 7.19521 1.40672C7.52205 0.960373 8.14882 0.863459 8.5952 1.19029C8.63126 1.21671 8.66554 1.24551 8.69775 1.2765L13.7062 6.28496C14.0976 6.67594 14.098 7.31016 13.707 7.70157C13.7067 7.70183 13.7065 7.70211 13.7062 7.70236L8.69775 12.7108C8.30603 13.1014 7.6718 13.1006 7.28114 12.7088C7.2504 12.678 7.2217 12.6452 7.19521 12.6107C6.91439 12.1918 6.97569 11.6316 7.34046 11.2834L10.1051 8.50872C10.2521 8.3616 10.4211 8.23823 10.606 8.1431L10.9065 8.00787H1.06986C0.558155 8.02687 0.109209 7.66943 0.0130777 7.16645C-0.0754786 6.62037 0.295399 6.10591 0.841477 6.01732Z" fill="#E13439"/></svg>');

    $(".swiper-button-prev").html('<svg width="14" height="14" class="swiper-arrow-prev" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.1585 6.01732C13.1012 6.00803 13.0432 6.00374 12.9852 6.00449H3.10851L3.32387 5.90432C3.53439 5.80468 3.7259 5.66908 3.88983 5.50364L6.65951 2.73396C7.02428 2.38575 7.08557 1.82558 6.80476 1.40672C6.47792 0.960373 5.85115 0.863459 5.40477 1.19029C5.36871 1.21671 5.33443 1.24551 5.30222 1.2765L0.293755 6.28496C-0.0976562 6.67594 -0.0980006 7.31016 0.292973 7.70157C0.293223 7.70183 0.293505 7.70211 0.293755 7.70236L5.30222 12.7108C5.69394 13.1014 6.32817 13.1006 6.71883 12.7088C6.74957 12.678 6.77827 12.6452 6.80476 12.6107C7.08557 12.1918 7.02428 11.6316 6.65951 11.2834L3.89484 8.50872C3.74787 8.3616 3.5789 8.23823 3.39399 8.1431L3.09349 8.00787H12.9301C13.4418 8.02687 13.8908 7.66943 13.9869 7.16645C14.0754 6.62037 13.7046 6.10591 13.1585 6.01732Z" fill="#E13439"/></svg>');

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

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    var mySwiper = new Swiper('.swiper-container-3', {
        // Optional parameters
        // direction: 'horizontal',
        slidesPerView: 7,
        slidesPerGroup: 1,
        loop: true,
        cssMode: true,
        keyboard: true,
        spaceBetween: 30,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    var mySwiper = new Swiper('.swiper-container-4', {
        // Optional parameters
        // direction: 'horizontal',
        slidesPerView: 3,
        slidesPerGroup: 3,
        loop: true,
        cssMode: true,
        keyboard: true,
        spaceBetween: 19,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    // Mobile

    var mySwiper = new Swiper('.swiper-container-mobile-1', {
        // Optional parameters
        // direction: 'horizontal',
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: true,
        cssMode: true,
        keyboard: true,
        spaceBetween: 30,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })

    $(".mobile-burger").click(function () {
        $(".mobile-navbar-links").toggleClass("active");
        $(".mobile-navbar-list-item").toggleClass("active");
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
        if ($(".novetly-availability-bag.active")) {
            $(".novetly-availability-bag-wrapper").click(function (e) {
                e.preventDefault();
                $(this).children(".novetly-availability-bag").removeClass("active")
                $(this).children(".novetly-availability-check-mark").addClass("active")
                bag2();
            });
        }
    }
    function bag2() {
        if ($(".novetly-availability-check-mark.active")) {
            $(".novetly-availability-bag-wrapper").click(function (e) {
                e.preventDefault();
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
        $(".smartphones-filter-dropdown-model").toggleClass("active");
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

    $(".bag-page-middle-card-1").click(function () {
        $(".bag-page-line-1").addClass("turn-off");
    })

    $(".bag-page-middle-card-2").click(function () {
        $(".bag-page-line-2").addClass("turn-off");
    })

    $(".bag-page-middle-card-3").click(function () {
        $(".bag-page-line-3").addClass("turn-off");
    })

    $(".mobile-bag-page-middle-card-delete-wrapper").click(function () {
        $(this).parents("div").parents(".flex").parents(".bag-page-middle-card-content").parents(".bag-page-middle-card").addClass("turn-off");
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

    // Product Button

    checkProduct();

    function checkProduct() {
        $(".product-lower-form-add-to-bag").click(function () {
            $(".classic.active").removeClass("active");
            $(".secondary-product-button").addClass("active");
            crossProduct();
        })
    }

    function crossProduct() {
        $(".product-lower-form-add-to-bag").click(function () {
            $(".classic").addClass("active");
            $(".secondary-product-button.active").removeClass("active");
            checkProduct();
        })
    }

    $('.product-lower-form-quantity-counter-prev-wrapper').click(function(e){
        let input = $(this).siblings('input');
        let value = parseInt(input.val());
        console.log(value);
        if (value > 0)
        {
            value -= 1;
            $(this).siblings('input').val(value);
            $(this).siblings('#product-lower-form-quantity-number-wrapper').text(value);
        }
    }); 

    $('.product-lower-form-quantity-counter-next-wrapper').click(function(e){
        let input = $(this).siblings('input');
        let value = parseInt(input.val());
        console.log(value);
        
        if (value >= 0)
        {
            value += 1;
            $(this).siblings('input').val(value);
            $(this).siblings('#product-lower-form-quantity-number-wrapper').text(value);

        }
    }); 


});