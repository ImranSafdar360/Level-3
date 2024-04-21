(function () {
    const locomotiveScroll = new LocomotiveScroll();
})();

const homePageAnimation = () => {
    gsap.set(".slidesm", {scale:5})
var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".home",
        start:"top top",
        end:"bottom bottom",
        scrub:2
    }
})
tl
.to(".video-div",{
    '--clip':"0%",
    ease:Power2
},'a')
.to(".slidesm",{
    scale:1,
    ease:Power2
},'a')
.to(".lft",{
    x:"-10%",
    ease:Power4,
},'b')
.to(".rgt",{
    x:"-20%",
    ease:Power4,
},'b')
.from(".center-text",{
    opacity:0,
    ease:Power2
},'b')
}
const realPageAnimation = () => {
    gsap.to(".slide",{
        scrollTrigger:{
            trigger:".real",
            start:"top top",
            end:"bottom bottom",
            scrub:2
        },
        xPercent:-200,
        ease:Power4
    });
}
const teamPageAnimation = () =>{
    document.querySelectorAll(".list-elem")
.forEach(function(el){
    el.addEventListener("mousemove",function(dets){
        gsap.to(this.querySelector(".img",), {opacity:1, x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX), ease:Power2, duration:1});
    })
    el.addEventListener("mouseleave",function(dets){
        gsap.to(this.querySelector(".img",), {opacity:0, ease:Power4, duration:1}) 
    })
})
}
const scrollTextLeft = () =>{
    var clutter = "";
   var spanPara = document.querySelector(".paragraph-1")
    .textContent.split("");
    spanPara.forEach(function(e){
        clutter += `<span>${e}</span>`;
    })
    document.querySelector(".paragraph-1").innerHTML = clutter;
    gsap.set(".paragraph-1 span",{opacity:.1});
    gsap.to(".paragraph-1 span",{
        scrollTrigger:{
            trigger:".l-text",
            start:"top 80%",
            end:"top 30%",
            scrub:1
        },
        opacity:1,
        stagger: 0.03,
        ease:Power4
    })
}
const scrollTextRight = () =>{
    var clutter = "";
   var spanPara = document.querySelector(".paragraph-2")
    .textContent.split("");
    spanPara.forEach(function(e){
        clutter += `<span>${e}</span>`;
    })
    document.querySelector(".paragraph-2").innerHTML = clutter;
    gsap.set(".paragraph-2 span",{opacity:.1});
    gsap.to(".paragraph-2 span",{
        scrollTrigger:{
            trigger:".r-text",
            start:"top 80%",
            end:"top 30%",
            scrub:1
        },
        opacity:1,
        stagger: 0.03,
        ease:Power4
    })
}
const capsuleScroll = () =>{
    gsap.from(".capsule-1",{
        scrollTrigger:{
            trigger:".Explore",
            start:"top 50%",
            end:"bottom bottom",
            scrub:1
        },
        y:-100,
        ease:Power4,
    });
    gsap.from(".capsule-2",{
        scrollTrigger:{
            trigger:".Explore",
            start:"top 50%",
            end:"bottom bottom",
            scrub:1
        },
        y:100,
        ease:Power4,
    });
}

document.querySelectorAll(".section")
.forEach(function(e){
    ScrollTrigger.create({
        trigger:e,
        start:"top 40%",
        end:"bottom 50%",
        onEnter: function(){
            document.body.setAttribute("theme", e.dataset.color);
        },
        onEnterBack: function(){
            document.body.setAttribute("theme", e.dataset.color);
        }
    })
})

homePageAnimation();
realPageAnimation();
teamPageAnimation();
scrollTextLeft();
scrollTextRight();
capsuleScroll();
