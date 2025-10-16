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

const section = document.getElementById("gallery");
const targetImg = document.getElementById("img4");
const otherImgs = [...document.querySelectorAll(".gallery-img")].filter(img => img !== targetImg);

window.addEventListener("scroll", () => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    let progress = (scrollY + viewportHeight - sectionTop) / (sectionHeight + viewportHeight);
    progress = Math.min(Math.max(progress, 0), 1);

    targetImg.style.width = 20 + (100 - 20) * progress + '%';

    otherImgs.forEach((img, i) => {
        if(i < 3){
            img.style.transform = `translateX(${-100 * progress}%)`;
        } else {
            img.style.transform = `translateX(${100 * progress}%)`;
        }
    });
});

