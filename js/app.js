const enterBtn =
document.querySelector(".enter-btn");

const slides =
document.querySelectorAll(".member-slide");

const prevBtn =
document.querySelector(".prev-btn");

const nextBtn =
document.querySelector(".next-btn");

const dotsContainer =
document.querySelector(".slide-dots");

const particlesContainer =
document.querySelector(".particles");

const lockGuideBtn =
document.querySelector(".lock-guide-btn");

const memberThemes = {
    "bang-chan": "#e63946",
    "lee-know": "#8ecae6",
    "changbin": "#b5179e",
    "hyunjin": "#f72585",
    "han": "#ff9900",
    "felix": "#00b4ff",
    "seungmin": "#70e000",
    "in": "#ffd166"
};

let currentSlide =
Array.from(slides).findIndex((slide) => slide.classList.contains("active"));

if(currentSlide === -1){

    currentSlide = 0;

}

function getMemberName(slide){

    return Array.from(slide.classList).find((className) => memberThemes[className]);

}

function setTheme(memberName){

    const color =
    memberThemes[memberName] || memberThemes.han;

    document.body.style.setProperty("--member-color", color);
    document.body.dataset.member = memberName;

}

function createParticles(){

    particlesContainer.innerHTML = "";

    for(let index = 0; index < 42; index++){

        const particle =
        document.createElement("span");

        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 6}s`;
        particle.style.animationDuration = `${5 + Math.random() * 7}s`;

        particlesContainer.appendChild(particle);

    }

}

slides.forEach((slide, index) => {

    const dot =
    document.createElement("button");

    const memberName =
    getMemberName(slide);

    dot.classList.add("slide-dot");
    dot.setAttribute("aria-label", `Show ${memberName}`);

    dot.addEventListener("click", () => {

        showSlide(index);

    });

    dotsContainer.appendChild(dot);

});

const dots =
document.querySelectorAll(".slide-dot");

function triggerGlitch(){

    document.body.classList.add("is-glitching");

    setTimeout(() => {

        document.body.classList.remove("is-glitching");

    }, 420);

}

function showSlide(index){

    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");

    currentSlide = (index + slides.length) % slides.length;

    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");

    setTheme(getMemberName(slides[currentSlide]));
    createParticles();
    triggerGlitch();

}

function moveCursor(event){

    document.body.style.setProperty("--cursor-x", `${event.clientX}px`);
    document.body.style.setProperty("--cursor-y", `${event.clientY}px`);

}

enterBtn.addEventListener("click", () => {

    document.body.classList.add("show-showcase");

});

prevBtn.addEventListener("click", () => {

    showSlide(currentSlide - 1);

});

nextBtn.addEventListener("click", () => {

    showSlide(currentSlide + 1);

});

lockGuideBtn.addEventListener("click", () => {

    const memberName =
    getMemberName(slides[currentSlide]);

    localStorage.setItem("selectedGuide", memberName);
    triggerGlitch();

    setTimeout(() => {

        window.location.href = `blog.html?member=${memberName}`;

    }, 420);

});

document.addEventListener("mousemove", moveCursor);

setTheme(getMemberName(slides[currentSlide]));
createParticles();
showSlide(currentSlide);
