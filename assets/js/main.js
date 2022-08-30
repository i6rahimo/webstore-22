const btnHeaderPopup = document.querySelector('.home__text-btn');
const headerPopup = document.querySelector('.home__popup');
const btnServicesPopup = document.querySelectorAll('.services__item-btn');
const servicePopup = document.querySelector('.services__popup');
console.log(headerPopup);
headerPopup.addEventListener('click', () => {
  headerPopup.classList.remove('show')
})
btnHeaderPopup.addEventListener('click', (e) => {
  headerPopup.classList.add('show')
});
btnServicesPopup.forEach((e) => {
  e.addEventListener('click', () => {
    servicePopup.classList.add('show');
  })
})
servicePopup.addEventListener('click', ()=> {
  servicePopup.classList.remove('show')
})



// =================  ORDER CONTENT =================

const btnOrder = document.querySelector('.order__item-more');
const contentOrder = document.querySelectorAll('.order__item-content')
// btnOrder.addEventListener('click', (btn)=> {
//   contentOrder.forEach((item)=> {
//     item.classList.toggle('visible')
//   })
//   console.log('qwee');
// })








/*=============== SWIPER POPULAR ===============*/
const swiper = new Swiper('.portfolio-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slideClass: 'portfolio-slide',
    wrapperClass: 'portfolio-wrapper',
    spaceBetween: 30,
    slidesPerView: 3,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });

  
