
// 배너
const swiper = new Swiper('.section_banner',{

    spaceBetween: 80,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

});

// new 상품 리스트
const swiper2 = new Swiper('.newproduct_list',{
    loop:true,
    initialSlide: window.innerWidth >= 1400? 1 : 0, 
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,

    breakpoints:{
      // 태블릿
      601:{
        slidesPerView: 1,
        spaceBetween: 40,
        centeredSlides: true,
      },
      // 웹
      1400:{
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        spaceBetween: 77,
        centeredSlides: true,
      }

    },
    
   
    on:{
      init: function(){
        toggleSlideText(this);
      },
      slideChange: function(){
        toggleSlideText(this);
      }
    }
});

function toggleSlideText(swiper){
  if(window.innerWidth < 1400){
    swiper.slides.forEach(slide => {
      slide.querySelectorAll('.newproduct_list_title, .newproduct_list_subtitle').forEach(el=>{
        el.style.display = 'block';
      })
    });
    return;
  } 
  

  swiper.slides.forEach(slide => {
    slide.querySelectorAll('.newproduct_list_title, .newproduct_list_subtitle').forEach(el=>{
      el.style.display = 'none';
    })
  });

  const activeSlide = swiper.slides[swiper.activeIndex];
  if(!activeSlide) return;

    const title = activeSlide.querySelector('.newproduct_list_title');
    const subtitle = activeSlide.querySelector('.newproduct_list_subtitle');
  
    if (title) title.style.display = 'block';
    if (subtitle) subtitle.style.display = 'block';


}



// event
const eventSiwper = new Swiper('.event_container',{
    slidesPerView: 2,
    initialSlide: 0,
    spaceBetween: 26,
    centeredSlides: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

    breakpoints:{
      // 태블릿
      601:{
        slidesPerView: 3,
        spaceBetween: 26,
        centeredSlides: false,
      },
      // 웹
      1400:{
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        spaceBetween: 40,
        centeredSlides: false,
      }

    },

});
