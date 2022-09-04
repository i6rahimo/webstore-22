const popupbtn = document.querySelector('.home__text-btn')
const popupHome = document.querySelector('.popup')
const popupClose = document.querySelector('.popup__close')
const serviceBtn = document.querySelectorAll('.services__item-btn')
const sentOrder = document.querySelector('.popup__order')
const orderClose = document.querySelector('.order__close')
const orderBtn = document.querySelectorAll('.order__text-btn')
const reviewBtn = document.querySelector('.review__btn')
const reviewPopup = document.querySelector('.popup__review')
const reviewClose = document.querySelector('.review__close')
const popupBtns = document.querySelector('.popup__btn') 
  popupbtn.addEventListener('click', ()=> {
    popupHome.classList.toggle('show');
  })
  popupClose.addEventListener('click', ()=> {
    popupHome.classList.toggle('show')
  })
  
  serviceBtn.forEach((el) => {
    el.addEventListener('click', () => {
      sentOrder.classList.toggle('show')
    })
  })
  orderClose.addEventListener('click', () => {
    sentOrder.classList.toggle('show')
  })
  
  orderBtn.forEach((el)=>  {
    el.addEventListener('click', ()=> {
      sentOrder.classList.toggle('show')
    })
  })
  reviewBtn.addEventListener('click', ()=> {
    reviewPopup.classList.toggle('show')
  })
  reviewClose.addEventListener('click', ()=> {
    reviewPopup.classList.toggle('show')
  })
// =================  ORDER CONTENT =================

// $(function(){
//   ‘use strict’;
//  $(‘#form’).on(‘submit’, function(e){
//   e.preventDefault();
//   var fd = new FormData( this );
//   $.ajax({
//   url: ‘send.php’,
//   type: ‘POST’,
//   contentType: false, 
//   processData: false, 
//   data: fd,
//   success: function(msg){
//  if(msg == ‘ok’) {
//   alert('Отправлено');
//  } else {
//   alert('Ошибка')
//  }
//   }
//   });
//   });
//  });


function send(event, php){
  console.log("Отправка запроса");
  console.log(event);
  console.log(php);
  // event.preventDefault ? event.preventDefault() : event.returnValue = false;
  // var req = new XMLHttpRequest();
  // req.open('POST', php, true);
  // // req.onload = function() {
  // //   if (req.status >= 200 && req.status < 400) {
  // //   json = JSON.parse(this.response); // Ебанный internet explorer 11
  // //       console.log(json);
          
  // //       // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
  // //       if (json.result == "success") {
  // //         // Если сообщение отправлено
  // //         alert("Сообщение отправлено");
  // //       } else {
  // //         // Если произошла ошибка
  // //         alert("Ошибка. Сообщение не отправлено");
  // //       }
  // //     // Если не удалось связаться с php файлом
  // //     } else {alert("Ошибка сервера. Номер: "+req.status);}}; 
  
  // // Если не удалось отправить запрос. Стоит блок на хостинге
  // req.onerror = function() {alert("Ошибка отправки запроса");};
  // req.send(new FormData(event.target));
  }

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

  
