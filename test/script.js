gsap.registerPlugin(ScrollTrigger);


gsap.fromTo(".textScroller", 
    {
        y: 100  /* Starting position offset */
    }, 
    {
        y: 0,  /* End position at normal place */
        scrollTrigger: {
            trigger: ".top",
            start: "top center", 
            end: "bottom center",
            scrub: true
        }
    }
);

const details = gsap.utils.toArray(".desktopContentSection:not(:first-child)")
const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)")

gsap.set(photos, {yPercent:101})

const allPhotos = gsap.utils.toArray(".desktopPhoto")

let mm = gsap.matchMedia();

mm.add("(min-width: 600px)", () => {
	
  ScrollTrigger.create({
	trigger:".gallery",
	start:"top top",
	end:"bottom bottom",
	pin:".right"
})

details.forEach((detail, index)=> {

	let headline = detail.querySelector("h1")
	let animation = gsap.timeline()
	   .to(photos[index], {yPercent:0})
	   .set(allPhotos[index], {autoAlpha:0})
	ScrollTrigger.create({
		trigger:headline,
		start:"top 80%",
		end:"top 50%",
		animation:animation,
		scrub:true,
		markers:false
	})
})
});


