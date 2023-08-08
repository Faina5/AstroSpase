gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if(ScrollTrigger.isTouch !==1){
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true
    })

    gsap.fromTo('.hero-section', {opacity: 1}, {
        opacity: 0,
        scrollTrigger: {
        trigger: '.hero-section',
        start: 'center',
        end: '800',
        scrub: true
        }
    })

    let itemsA = gsap.utils.toArray('.text')

    itemsA.forEach(item => {
        gsap.fromTo(item, {opacity: 0}, {
            opacity: 1, x: 0,
            scrollTrigger: {
            trigger: item,
            scrub: true,
            start: '-1000',
            end: '-50',
            }
        })
    })

    let itemsR = gsap.utils.toArray('.gallery__right .image')

    itemsR.forEach(item => {
        gsap.fromTo(item, {x: -1000, opacity: 0}, {
            opacity: 1, x: 0,
            scrollTrigger: {
            trigger: item,
            scrub: true,
            start: '-800',
            end: '-10',
            }
        })
    })

    let itemsL = gsap.utils.toArray('.gallery__left .image')

    itemsL.forEach(item => {
        gsap.fromTo(item, {x: 1000, opacity: 0}, {
            opacity: 1, x: 0,
            scrollTrigger: {
            trigger: item,
            scrub: true,
            start: '-800',
            end: '-10'
            }
        })
    })

    let itemsM = gsap.utils.toArray('.about-moon__item .about-moon__article')

    itemsL.forEach(item => {
        gsap.fromTo(item, {x: 25, opacity: 0}, {
            opacity: 1, x: 0,
            scrollTrigger: {
            trigger: item,
            scrub: true,
            start: '-1000',
            end: '-10'
            }
        })
    })
    }



const text = document.querySelector(".sec-text");
const textLoad = () => {
    setTimeout( () => {
        text.textContent = "Earth's Moon";
    }, 0);

}
textLoad();
setInterval(textLoad, 4000);