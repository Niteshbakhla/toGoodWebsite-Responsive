
const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();


const text = document.querySelector(".text p")
const head = document.querySelectorAll(".page1 h1")

text.innerHTML = text.innerText.split("").map((char, i) => {
    return `<span style="transform:rotate(${i * 10}deg)">${char}</span>`
}).join("")

head.forEach(letter => {
    letter.innerHTML = letter.innerText.split(" ").map(char => {
        return `<span>${char}</span>`
    }).join("")
})

gsap.to(".page1 span", {
    y: 0,
    stagger: 0.8,
    duration: 0.6
})

const main = document.querySelector(".secondContent")
const box = document.querySelectorAll(".dibba");

document.addEventListener("mousemove", (e) => {
    gsap.to(".boxy", {
        left: e.x,
        top: e.y
    })
})

box.forEach(bobs => {
    bobs.addEventListener("mouseenter", () => {
        gsap.to(".boxy", {
            transform: "translate(-50%,-50%)",
            scale: 1
        })
    })

    bobs.addEventListener("mouseleave", () => {
        gsap.to(".boxy", {
            transform: "translate(-50%,-50%)",
            scale: 0
        })
    })
})



gsap.to(".navpart1 svg", {
    transform: "translateY(-100%)",
    scrollTrigger: {
        trigger: ".page1",
        scroller: ".main",
        start: "top 0",
        end: "top -5%",
        scrub: true

    }
})

gsap.to(".nav2 .links ", {
    transform: "translateY(-100%)",
    opacity: 0,
    scrollTrigger: {
        trigger: ".page1",
        scroller: ".main",
        start: "top 0%",
        end: "top -5%",
        scrub: true

    }
})

