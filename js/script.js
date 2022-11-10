(function(){
  const listElements = document.querySelectorAll('.menu__item--show');
  const list = document.querySelector('.menu__links');
  const menu = document.querySelector('.menu__hamburguer');

  const addClick = ()=>{
      listElements.forEach(element =>{
          element.addEventListener('click', ()=>{

              
              let subMenu = element.children[1];
              let height = 0;
              element.classList.toggle('menu__item--active');


              if(subMenu.clientHeight === 0){
                  height = subMenu.scrollHeight;
              }

              subMenu.style.height = `${height}px`;

          });
      });
  }

  const deleteStyleHeight = ()=>{
      listElements.forEach(element=>{

          if(element.children[1].getAttribute('style')){
              element.children[1].removeAttribute('style');
              element.classList.remove('menu__item--active');
          }

      });
  }


  window.addEventListener('resize', ()=>{
      if(window.innerWidth > 800){
          deleteStyleHeight();
          if(list.classList.contains('menu__links--show'))
              list.classList.remove('menu__links--show');

      }else{
          addClick();
      }
  });

  if(window.innerWidth <= 800){
      addClick();
  }

  menu.addEventListener('click', ()=> list.classList.toggle('menu__links--show'));



})();









//otro java











let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
//COMENTAR
menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{

   let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

}

document.querySelector('#search-icon').onclick = () =>{
  document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
  document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop:true,
});

//hasta ACA//

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop:true,
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut;



