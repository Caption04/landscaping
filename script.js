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

const images = document.querySelectorAll('.gallery-container img');
    const totalScroll = document.body.scrollHeight - window.innerHeight;
    const segment = totalScroll / (images.length - 1);

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;

      images.forEach((img, i) => {
        const start = i * segment;
        const end = (i + 1) * segment;
        const progress = Math.min(Math.max((scrollY - start) / segment, 0), 1);

        if (i === 0) return; // first stays still

        // move each image upward into the neutral position
        const offset = 120 - progress * 120; // from 120px to 0px
        img.style.transform = `translateY(${offset}px)`;
      });
    });