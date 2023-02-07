
$(document).ready(function(){
    var tabSwiperNum = $('.tabSwiper').find('.swiper-slide'); 
    var contSwiperNum = $('.contSwiper').find('.swiper-slide');

     var tabSwiper = new Swiper ('.tabSwiper', {
        slideToClickedSlide: true,
        slidesPerView: 3,
        spaceBetween: 0,
        loop: true, //슬라이드 반복 
        loopedSlides: tabSwiperNum.length //loop 시 파라미터 duplicate 개수 - 정적으로 숫자 표현 가능
    }); 

    var menu = ['ITEM1', 'ITEM2', 'ITEM3', 'ITEM4', 'ITEM5']
    var contSwiper = new Swiper ('.contSwiper', {
        slideToClickedSlide: true,
        // If we need pagination
        pagination: {
        el: '.contSwiper .swiper-pagination',
                clickable: true,
            renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (menu[index]) + '</span>';
            },
        },
        // Navigation arrows
        navigation: {
            nextEl: '.contSwiper .swiper-button-next',
            prevEl: '.contSwiper .swiper-button-prev',
        },
        loop: true, //슬라이드 반복 
        loopedSlides: contSwiperNum.length //loop 시 파라미터 duplicate 개수 - 정적으로 숫자 표현 가능
    }); 


    tabSwiper.controller.control = contSwiper; 
    contSwiper.controller.control = tabSwiper;
});