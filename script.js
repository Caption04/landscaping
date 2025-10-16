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

const section = document.querySelector('.gallery-section');
const targetImg = document.getElementById('img4');
const otherImgs = [...document.querySelectorAll('.gallery-image')].filter(img => img !== targetImg);

window.addEventListener('scroll', () => {
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const scrollY = window.scrollY;
  const viewportHeight = window.innerHeight;

  // progress from 0 → 1 as user scrolls through the pinned section
  let progress = (scrollY - sectionTop + viewportHeight) / (sectionHeight);
  progress = Math.min(Math.max(progress, 0), 1);

  // grow target image
  targetImg.style.width = 20 + (100 - 20) * progress + 'vw';

  // slide other images aside
  otherImgs.forEach((img, i) => {
    if(i < 3){
      img.style.transform = `translateX(${-50 * progress}%)`; // left
    } else {
      img.style.transform = `translateX(${50 * progress}%)`; // right
    }
  });
});
