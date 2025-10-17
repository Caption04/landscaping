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

const images = document.querySelectorAll('.stack img');

    window.addEventListener('scroll', () => {
      // get scroll progress (0 to 1)
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;

      // top image stays, others move more as you scroll
      images.forEach((img, i) => {
        if (i === 0) return; // top one stays
        const direction = i % 2 === 0 ? -1 : 1; // alternate left/right
        const offset = progress * (i * 60); // how far they move
        img.style.transform = `translate(${direction * offset}px, ${i * 10}px)`;
      });
    });