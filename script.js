if (window.innerWidth <= 600) {
    var tl = gsap.timeline();

    tl.from(".loader img", {
        // x: 100,
        duration: 1,
        opacity: 0,
        delay: 0.2,
        stagger: 0.3
    });
    tl.to(".loader img", {
        // x: -100,
        duration: 0.6,
        opacity: 0,
        delay: 0.4,
        stagger: 0.3
    });

    tl.to(".loader", {
        top: "-150%",
        duration: 0.3,
        opacity: 0,
    });

    tl.from(".logo img", {
        x: -20,
        duration: 0.7,
        opacity: 0

    }, 'same');

    tl.from(".links h4", {
        y: 30,
        opacity: 0,
        duration: 0.4,
        delay: 0.3,
        stagger: 0.3
    }, 'same')

    tl.from(".text h1", {
        y: 100,
        opacity: 0,
        delay: 0.4,
        duration: 0.3,
        stagger: 0.3
    }, 'same');
}




if (window.innerWidth >= 600) {

    var tll = gsap.timeline();

    tll.from(".loader img", {
        // x: 100,
        duration: 0.6,
        opacity: 0,
        delay: 0.3,
        stagger: 0.3
    });
    tll.to(".loader img", {
        // x: -100,
        duration: 0.6,
        opacity: 0,
        delay: 1.2,
        stagger: 0.3
    });

    tll.to(".loader", {
        top: "-150%",
        duration: 0.4,
        opacity: 0,
    });

    tll.from(".logo img", {
        x: -20,
        duration: 0.7,
        opacity: 0

    }, 'same');

    tll.from(".links h4", {
        y: 30,
        opacity: 0,
        duration: 0.3,
        delay: 0.3,
        stagger: 0.3
    }, 'same')

    tll.from(".text h1", {
        y: 100,
        opacity: 0,
        delay: 0.4,
        duration: 0.3,
        stagger: 0.3
    }, 'same');



    let tl2 = gsap.timeline();

    tl2.from(".about-us h3", {
        duration: 0.5,
        opacity: 0,
        scrollTrigger: {
            trigger: ".about-us h3",
            scroller: "body",
            // markers:true,
            start: "top 50%",

            scrub: 2
        }
    })


    tl2.from(".about-us p", {
        y: 60,
        duration: 0.5,
        delay: 0.5,
        opacity: 0,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".about-us",
            scroller: "body",
            // markers:true,
            start: "top 40%",
            // end:"top 10%",
            scrub: 2,
            transition: "all linear 0.5s"
        }
    })

    tl2.from(".box1", {
        y: 60,
        duration: 0.5,
        delay: 0.4,
        opacity: 0,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".first-about",
            scroller: "body",
            // markers:true,
            start: "top 50%",
            end: "start 10%",
            scrub: 2,
            stagger: 0.3,

        }
    });


    tl2.from(".box2", {
        y: 60,
        duration: 0.5,
        delay: 0.4,
        opacity: 0,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".first-about",
            scroller: "body",
            // markers:true,
            start: "top 50%",
            end: "start 10%",
            scrub: 2,
            stagger: 0.3,

        }
    })



    let tl3 = gsap.timeline();

    tl3.from(".img-div", {
        y: 100,
        opacity: 0,
        duration: 0.3,
        delay: 0.3,
        scrollTrigger: {
            trigger: ".img-div",
            scroller: "body",
            // markers:true,
            scrub: 2
        }
    });

    tl3.from("#service-box1", {
        x: -100,
        duration: 0.3,
        opacity: 0,
        scrollTrigger: {
            trigger: "#service-box1",
            scroller: "body",
            // markers:true,
            scrub: 2,
            end: "bottom 2%"
        }
    })


    tl3.from("#service-box2", {
        x: -100,
        duration: 0.3,
        opacity: 0,
        scrollTrigger: {
            trigger: "#service-box2",
            scroller: "body",
            // markers:true,
            scrub: 2,
            end: "bottom 2%"
        }
    });


    tl3.from("#service-box3", {
        x: 100,
        duration: 0.3,
        opacity: 0,
        scrollTrigger: {
            trigger: "#service-box3",
            scroller: "body",
            // markers:true,
            scrub: 2,
            end: "bottom 2%"
        }
    })


    tl3.from("#service-box4", {
        x: 100,
        duration: 0.3,
        opacity: 0,
        scrollTrigger: {
            trigger: "#service-box4",
            scroller: "body",
            // markers:true,
            scrub: 2,
            end: "bottom 2%"
        }
    })



}


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


// let anchor = document.querySelectorAll(".links a");

// anchor.addEventListener("click",function(){
//     setTimeout(() => {
//         resnav.style.display = "none"
//     }, 3);
// })






