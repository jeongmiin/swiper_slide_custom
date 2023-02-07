
$(document).ready(function(){
    AOS.init();

    var contSwiperNum = $('.contSwiper').find('.swiper-slide');
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
        loopedSlides: contSwiperNum.length, //loop 시 파라미터 duplicate 개수 - 정적으로 숫자 표현 가능
        on: {
            slideChange: function(){
                $('.conts_area > .txt_box').html($('.contSwiper .swiper-slide').eq(this.activeIndex).find('.txt_box').html());
            }
        }
    }); 

    var activeSlide = $('.contSwiper .swiper-slide-active').find('.txt_box').html();
    $('.conts_area > .txt_box').html(activeSlide);
});