
window.addEventListener('DOMContentLoaded', () => {
  if(window.location.pathname.endsWith("index.html")){
    console.log('home');
    document.querySelector('.hero').classList.remove('new-style');
  }else if(window.location.pathname.endsWith("about.html")){
    console.log('about');
    document.querySelector('.hero').classList.add('new-style');
  }
  // else if(){}
})

// Hero button
const heroButton = document.querySelector('.hero-btn');
const body = document.querySelector('.body');

heroButton.addEventListener('click', () => {
  body.scrollIntoView(
    {
      behavior: 'smooth',
      block: 'start'
    }
  );
})

const header = document.querySelector(".header");
const menu = document.querySelector(".menu");
const navButtons = document.querySelectorAll('.nav-menu-btn, .small-hero-btn');
const closeMenu = document.querySelector('.close-menu');

navButtons.forEach(button => {
  button.addEventListener("click", (e) => {
      const clickedBtn = e.currentTarget;
      console.log('Clicked', clickedBtn);
      const closeBtn = button.querySelector(".menu-close-btn");
      const openBtn = button.querySelector(".menu-open-btn");
      if(clickedBtn.classList.contains('nav-menu-btn')){
        openBtn.classList.toggle("open-btn");
        closeBtn.classList.toggle("close-btn");
      }
      menu.classList.toggle("open");

      if(menu.classList.contains("open")){
          document.body.style.overflow = "hidden";
      }
      else{
          document.body.style.overflow = "auto";
      }
  })
})

closeMenu.addEventListener('click', () => {
      menu.classList.remove("open");
      document.body.style.overflow = "auto";
  })

