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

const smallBtn = document.querySelector(".small-hero-btn");
smallBtn.addEventListener("click", () => {
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

// const images = document.querySelectorAll('.gallery-container img');
// let currentIndex = 0; // tracks which image is currently on top

// window.addEventListener('scroll', () => {
//   const viewportTrigger = window.innerHeight * 0.7; // 70% of viewport
//   const topImage = images[currentIndex];
//   const rect = topImage.getBoundingClientRect();

//   // check if the top image has reached the trigger
//   if(rect.top <= viewportTrigger && currentIndex < images.length - 1) {
//     currentIndex++;
//     const nextImage = images[currentIndex];

//     // move next image to neutral and bring it on top
//     nextImage.style.transform = 'translateY(0)';
//   }
// });