let resbtn = document.querySelector("nav i");
let resnav = document.querySelector(".res-nav");

let flag = 0;

resbtn.addEventListener("click", function () {
    if (flag === 0) {
        gsap.to(".res-nav", {
            top: "15%",
            duration: 0.7
        });
        flag = 1;
    } else {
        gsap.to(".res-nav", {
            top: "-150%",
            duration: 0.7
        });
        flag = 0;
    }
});



const carousel = document.querySelector(".carousel-container");
const items = document.querySelectorAll(".carousel-item");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;
const totalItems = items.length;
const theta = (2 * Math.PI) / totalItems;
const radius = 400;

function rotateCarousel() {
  const angle = theta * currentIndex * -1;
  carousel.style.transform = `rotateY(${angle}rad)`;

  items.forEach((item, index) => {
    const itemAngle = theta * index;
    const x = Math.sin(itemAngle) * radius;
    const z = Math.cos(itemAngle) * radius;
    item.style.transform = `translate3d(${x}px, 0, ${z}px) rotateY(${itemAngle}rad)`;
  });
}

// Initial setup
items.forEach((item, index) => {
  const itemAngle = theta * index;
  item.style.transform = `rotateY(${itemAngle}rad) translateZ(${radius}px)`;
});

// Event listeners for buttons
prevBtn.addEventListener("click", () => {
  currentIndex--;
  rotateCarousel();
});

nextBtn.addEventListener("click", () => {
  currentIndex++;
  rotateCarousel();
});

// Auto-rotate
setInterval(() => {
  currentIndex++;
  rotateCarousel();
}, 4000);

// Initial rotation
rotateCarousel();










