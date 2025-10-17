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
    const sectionHeight = totalScroll / images.length;

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;

      images.forEach((img, i) => {
        const start = i * sectionHeight;
        const end = (i + 1) * sectionHeight;
        const progress = (scrollY - start) / (end - start);

        if (scrollY < start) {
          img.style.opacity = 0;
          img.style.transform = 'translateY(50px)';
        } else if (scrollY >= start && scrollY <= end) {
          img.style.opacity = progress;
          img.style.transform = `translateY(${50 - progress * 50}px)`;
        } else {
          img.style.opacity = 1;
          img.style.transform = 'translateY(0)';
        }
      });
    });