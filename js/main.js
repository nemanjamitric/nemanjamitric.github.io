const intro = gsap.timeline()
intro
.from('.welcome', {y:'120%', duration:1, delay:0.3, ease:'power1'})
.from('.name, .surname', {y:'120%', duration:1, ease:'power1'})
.from('.b-5', {y:'-600%', duration:0.7})
.from('.b-4', {y:'-500%', duration:0.7})
.from('.b-3', {y:'-400%', duration:0.7})
.from('.b-2', {y:'-300%', duration:0.7})
.from('.b-1', {y:'-200%', duration:0.7})
.from('.left-arrow-corner', {x:'-200%', duration:0.7})
.from('.right-arrow-corner', {x:'200%', duration:0.7}, '<')
.from('#nav1', {x:'100%', duration:0.5, ease:'power1'})
.from('#nav2', {x:'100%', duration:0.5, ease:'power1'}, '<0.2')
.from('#nav3', {x:'100%', duration:0.5, ease:'power1'}, '<0.2')
.from('#nav4', {x:'100%', duration:0.5, ease:'power1'}, '<0.2')

setTimeout(function() {
    document.querySelector("body").classList.remove("unscrollable")
}, 8000);



const arrows_disappear = gsap.timeline({scrollTrigger:{
        trigger:".arrow-container",
        scrub: true,
        start: "-=80",
        end:"+=450",
    }})
arrows_disappear
.to('.b-5', {y:'200%', duration:0.4})
.to('.b-4', {y:'300%', duration:0.4})
.to('.b-3', {y:'400%', duration:0.4})
.to('.b-2', {y:'500%', duration:0.4})
.to('.b-1', {y:'600%', duration:0.4})



const road = gsap.timeline({scrollTrigger:{
    trigger:"#road",
    scrub: true,
    start: "+=50",
    end:"bottom top",
}})
road
    .from('#vertical_first1', {y:'-14vh', duration:0.15, ease:'power2.in'})
    .from('#vertical_first2', {y:'-45vh', duration:0.3, ease:'power2.in'}, '<')
    .from('#vertical_first3', {y:'-65vh', duration:0.5, ease:'power2.in'}, '<')
    .from('#vertical1', {y:'-70vh', duration:0.5, ease:'power2.in'}, '<0.11')
    .from('#vertical2', {y:'-70vh', duration:0.5, ease:'power2.in'}, '<0.11')
    .from('#vertical3', {y:'-70vh', duration:0.5, ease:'power2.in'}, '<0.11')
    .from('#vertical4', {y:'-70vh', duration:0.5, ease:'power2.in'}, '<0.11')
    .from('#vertical5', {y:'-70vh', duration:0.5, ease:'power2.in'}, '<0.11')
    .from('#vertical6', {y:'-70vh', duration:0.5, ease:'power2.in'}, '<0.11')
    .from('#vertical7', {y:'-70vh', duration:0.5, ease:'power2.in'}, '<0.11')
    .from('#vertical8', {y:'-70vh', duration:0.5, ease:'power2.in'}, '<0.11')
    .from('#vertical9', {y:'-70vh', duration:0.5, ease:'power2.in'}, '<0.11')
    .from('#vertical10', {y:'-70vh', duration:0.5, ease:'power2.in'}, '<0.11')
    .from('#vertical11', {y:'-70vh', duration:0.5, ease:'power2.in'}, '<0.11')
    .from('#vertical12', {y:'-70vh', duration:0.5, ease:'power2.in'}, '<0.11')


const rs1 = gsap.timeline({scrollTrigger:{
        trigger:"#road",
        scrub: true,
        start: "+=550",
        end:"bottom bottom",
    }})
rs1
    .from('#road-slide1', {z:'-325px', opacity: 0, delay:0.2, duration:0.5, ease:'power2.in'})
    .to('#road-slide1', {z:'100px', opacity: 0, delay:0.5, duration:0.5, ease:'power2.in'})
    .from('#road-slide2', {z:'-325px', opacity: 0, delay:0, duration:0.5, ease:'power2.in'})
    .to('#road-slide2', {z:'100px', opacity: 0, delay:0.5, duration:0.5, ease:'power2.in'})
    .from('#road-slide3', {z:'-325px', opacity: 0, delay:0, duration:0.5, ease:'power2.in'})
    .to('#road-slide3', {z:'100px', opacity: 0, delay:0.5, duration:0.5, ease:'power2.in'})
    .from('#road-slide4', {z:'-325px', opacity: 0, delay:0, duration:0.5, ease:'power2.in'})



$(".nostroke").each(function() {
    // Content Reveal Animation
    ScrollTrigger.create({
      trigger: ".nostroke",
      start: "top 80%",
      end: "bottom 100px",
      onEnter: () => $(this).removeClass('nostroke'),
    });
  });


const futureSun = gsap.timeline({scrollTrigger:{
        trigger:"#future",
        start: "top 30%",
    }})
futureSun
    .from('#sun', {y:'30%', opacity: 0, delay:0.2, duration:1.8, ease:'power1.in'})

