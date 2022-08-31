const popupbtn = document.querySelector('.home__text-btn')
const popupHome = document.querySelector('.popup')
const popupClose = document.querySelector('.popup__close')
popupbtn.addEventListener('click', ()=> {
  popupHome.classList.toggle('show')
})
// popupHome.addEventListener('click', ()=> {
//   popupHome.classList.toggle('show')
// })
popupClose.addEventListener('click', () => {
  popupHome.classList.remove('show')
})

// =================  ORDER CONTENT =================





function send(event, php){
  console.log("Отправка запроса");
  event.preventDefault ? event.preventDefault() : event.returnValue = false;
  var req = new XMLHttpRequest();
  req.open('POST', php, true);
  req.onload = function() {
    if (req.status >= 200 && req.status < 400) {
    json = JSON.parse(this.response); // Ебанный internet explorer 11
        console.log(json);
          
        // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
        if (json.result == "success") {
          // Если сообщение отправлено
          alert("Сообщение отправлено");
        } else {
          // Если произошла ошибка
          alert("Ошибка. Сообщение не отправлено");
        }
      // Если не удалось связаться с php файлом
      } else {alert("Ошибка сервера. Номер: "+req.status);}}; 
  
  // Если не удалось отправить запрос. Стоит блок на хостинге
  req.onerror = function() {alert("Ошибка отправки запроса");};
  req.send(new FormData(event.target));
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

  
