$(document).ready(function (){
    var contSwiperNum01 = $('.nested_slider').find('.swiper-slide');
    var nestedSwiper = new Swiper ('.nested_slider',{
        autoplay: {
            delay: 2500,
        },
        observer: true, 
        observeParents: true,
        // Navigation arrows
        navigation: {
            nextEl: '.nested_slider .next',
            prevEl: '.nested_slider .prev',
        },
        loop: true,
        loopedSlides: contSwiperNum01.length,
        on: {
            slideChange: function(){
                var r_idx = this.activeIndex;
                var slide = this.slides[r_idx];
                var slideId = $(slide).attr('id');
                
                if($('.nested_slider').find('.'+slideId+'_nav').length > 0){
                        $('.nested_slider .pagination li').removeClass('active');
                        $('.nested_slider').find('.'+slideId+'_nav').addClass('active');
                    }
                }   
            }
    }); 
                        
    var slidePageNav = $('.pagination ul li'); 
    slidePageNav.click(function(){
        var pageNav = $(this).attr('data-tab');

        slidePageNav.removeClass('active');
        $(this).addClass('active');


        nestedSwiper.slideTo(pageNav);
        // console.log(pageNav);
    });
});