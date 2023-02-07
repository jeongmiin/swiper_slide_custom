$(document).ready(function (){
    $( ".swiper-container-v" ).each(function(index){
        var swiperV = new Swiper(this, {
            loop: false,
            direction: 'horizontal',
            nested: true,
            // Add navigation buttons
            navigation: {
                nextEl: '.swiper-next-v',
                prevEl: '.swiper-prev-v',
            },
            on: {
                reachEnd: function(){
                    $('.swiper-next-h').show();
                },
                reachBeginning: function(){
                    $('.swiper-prev-h').show();
                },
                // slideChange: function(){
                //     var $swiperV = $('.swiper-container-v > .swiper-wrapper > .swiper-slide');
                //     if(!($swiperV.closest('.swiper-slide-group').hasClass('swiper-slide-active'))){
                //         console.log('test');
                //     }
                // }
            }
        });

        $(this).parent().find('.swiper-button-prev').on('click', function(event){
            event.preventDefault();
            swiperV.swipePrev();
        });
            
        $(this).parent().find('.swiper-button-next').on('click', function(event){
            event.preventDefault();
            swiperV.swipeNext();
        });
    });

    var menuH = ['Slide 1', 'Slide 2', 'Slide 3', 'slide 4']
    var swiperH = new Swiper('.swiper-container-h', {
        loop: true,
        // Add pagination
        pagination: {
            el: '.swiper-pagination-h',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (menuH[index]) + '</span>';
            },
        },
        // Add navigation buttons
        navigation: {
            nextEl: '.swiper-next-h',
            prevEl: '.swiper-prev-h',
        },
        // navigation arrows
        on: {
            slideChange: function(){
                var $slideH = $('.swiper-container-h > .swiper-wrapper > .swiper-slide');
                if($slideH.eq(this.activeIndex).hasClass('swiper-slide-group')){
                    $('.swiper-prev-h, .swiper-next-h').hide();
                    $('.swiper-slide-group .swiper-slide:first-child').removeClass('test');
                }else{
                    $('.swiper-prev-h, .swiper-next-h').show();
                    // swiperV.slideTo(0);
                }
            }
        }      
    });
});