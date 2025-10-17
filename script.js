const header = document.querySelector(".header");
const menu = document.querySelector(".menu");
const navButton = document.querySelector(".nav-menu-btn");

navButton.addEventListener("click", () => {
    const closeBtn = navButton.querySelector(".menu-close-btn");
    const openBtn = navButton.querySelector(".menu-open-btn");

    menu.classList.toggle("open");
    openBtn.classList.toggle("open-btn");
    closeBtn.classList.toggle("close-btn");
    if(menu.classList.contains("open")){
        document.body.style.overflow = "hidden";
    }
    else{
        document.body.style.overflow = "auto";
    }
})

const stack = document.getElementById('stack');
const scrollHeight = document.body.scrollHeight - window.innerHeight;

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const progress = scrollTop / scrollHeight;

  // Move stack horizontally based on scroll
  const moveX = -progress * (stack.scrollWidth - window.innerWidth + 40);
  stack.style.transform = `translateX(${moveX}px)`;
});