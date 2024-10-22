let tl = gsap.timeline()

tl.from("#video",{

    y:-50,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.1,
    scale:0

})

tl.from(".nav a",{

    y:-500,
    opacity:0,
    duration:0.5,
    stagger:0.2,
    scale:0

})

tl.from("#title",{

    x:-500,
    opacity:0,
    duration:1,
    stagger:0.1,
    scale:1

})

tl.from("#theme",{

    bottom:500,
    opacity:0,
    duration:1,
    stagger:0.3,
    scale:2

})


tl.from(".button",{

    bottom:"2px",
    opacity:0,
    duration:1,
    stagger:0.1,
    scale:0

})