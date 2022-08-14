import 'swiper/swiper-bundle.min.js'
import Swiper, { Pagination } from 'swiper';


const sliderList = document.querySelectorAll('.swiper');

function mobileSlider() {
  for (let i=0; i<sliderList.length; i++){
    if(window.innerWidth < 768) {
      const slider = sliderList[i];
      let myswip = new Swiper(slider, {
        modules: [ Pagination],
        loop:true,
        slideToClickedSlide: false,
        slidesPerView: 'auto',
        spaceBetween:16,
        slideClass: 'swiper-slide',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
    }
  }
}
mobileSlider()



const serviceShowMoreList = document.querySelectorAll('.service__show-more');
const serviceList = document.querySelectorAll('.service');
const serviceLogoList = document.querySelectorAll('.service-logo')
const serviceLogoWrapperList = document.querySelectorAll('.service-logo__wrapper');



const logoData = [
  {
    src: '../img/service/samsung.png',
    alt: 'Samsung'
  },
  {
    src: '../img/service/apple.png',
    alt: 'Apple'
  }
]

function createElement (tagName, parent, className, className2 ) {
  let element = document.createElement(tagName);
  parent.appendChild(element);
  element.classList.add(className);
  element.classList.add(className2)
  return element;
};

function deleteEvent () {
  document.querySelector('.dop').remove();
}

for (let i = 0; i < serviceShowMoreList.length; i++) {
  serviceShowMoreList[i].addEventListener('click', showMore)

  function showMore() {

    for (let j = 0; j < serviceShowMoreList.length; j++) {
      if (i ==j) {
        serviceList[i].classList.toggle ('service-click');
        serviceLogoWrapperList[i].classList.toggle ('service-logo__wrapper-click');
        serviceLogoList[i].classList.toggle ('service-logo-click');
        serviceShowMoreList[i].classList.toggle ('show-more-click');

        if (serviceList[i].classList.contains('service-click')){
          serviceShowMoreList[i].textContent = 'Скрыть'
        }
        else {
          serviceShowMoreList[i].textContent = 'Показать всё'
        }

        if (window.innerWidth >= 1120 && serviceList[i].classList.contains('service-click') && serviceList[i].classList.contains('logotype')) {
          for (let t=0; t< logoData.length; t++) {
            let div = createElement('div', serviceLogoWrapperList[i], 'service-logo__slide', 'swiper-slide');
            div.classList.add('dop');
            let button = createElement ('button', div, 'company');
            let image = createElement ('img', button, 'company__logo');
            image.src = logoData[t].src;
            image.alt = logoData[t].alt;
            serviceShowMoreList[i].addEventListener('click', deleteEvent);
          }
        }
      }
    }
  }
}

