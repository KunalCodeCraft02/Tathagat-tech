
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