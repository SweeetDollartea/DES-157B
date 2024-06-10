// const counters = document.querySelectorAll('.value');
// const speed = 200;

// counters.forEach( counter => {
//    const animate = () => {
//       const value = +counter.getAttribute('akhi');
//       const data = +counter.innerText;
     
//       const time = value / speed;
//      if(data < value) {
//           counter.innerText = Math.ceil(data + time);
//           setTimeout(animate, 1);
//         }else{
//           counter.innerText = value;
//         }
     
//    }
   
//    animate();
// });


var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 1000;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }

    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};




const details = gsap.utils.toArray(".desktopContentSection:not(:first-child)")
const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)")

gsap.set(photos, {yPercent:101})

const allPhotos = gsap.utils.toArray(".desktopPhoto")

let mm = gsap.matchMedia();

mm.add("(min-width: 600px)", () => {
  console.log("desktop")
	
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







const container = document.querySelector(".container");
const sections = gsap.utils.toArray(".container section");
const texts = gsap.utils.toArray(".anim");
const mask = document.querySelector(".mask");

let scrollTween = gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    end: "+=3000",
  }
});

console.log(1 / (sections.length - 1))


gsap.to(mask, {
  width: "100%",
  scrollTrigger: {
    trigger: ".wrapper",
    start: "top left",
    scrub: 1,
  }
});

sections.forEach((section) => {
  let text = section.querySelectorAll(".anim");
  
  if(text.length === 0)  return 
  
  gsap.from(text, {
    y: -130,
    opacity: 0,
    duration: 2,
    ease: "elastic",
    stagger: 0.1,
    scrollTrigger: {
      trigger: section,
      containerAnimation: scrollTween,
      start: "left center",
    }
  });
});



gsap.to('.graph h1', {
  scale:350,
  stagger: 1,
  duration: 3,
  scrollTrigger: {
    trigger: '.graph',
    pin: true,
    end: `+=${innerHeight * 1.3}`,
    scrub: 2,
    toggleActions: "restart pause reverse pause"
  }
});

///


function initChart() {
  const ctx = document.getElementById('myChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['2023', '2025', '2030', '2035', '2040', '2045','2050'],
      datasets: [{
        label: 'Demand of Predicted Use of REE in Kilotons',
        data: [92.62, 104.72, 133.48, 153.46, 169.04, 183.99, 200.21],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

initChart();

gsap.to('#myChart', {
  autoAlpha: 1, 
  scrollTrigger: {
    trigger: '.graph',
    start: "top top", 
    end: "bottom bottom", 
    onEnter: () => {
      setTimeout(() => {
        gsap.to('#myChart', { autoAlpha: 1 });
      }, 1000); 
    },
  }
});

gsap.to('#myChart', {
  autoAlpha: 0, 
  scrollTrigger: {
    trigger: '.graph',
    start: "top top", 
    end: "bottom bottom", 
    onLeave: () => {
      gsap.to('#myChart', { autoAlpha: 0 });
    },
  }
});


gsap.to('.graph h1', {
  scale: 1, // Reset scale to normal
  duration: 3,
  scrollTrigger: {
    trigger: '#red-section',
    start: "top bottom", // Trigger when the top of red section hits the bottom of the viewport
    end: "top top", // End when the top of red section hits the top of the viewport
    scrub: true,
    toggleActions: "restart pause reverse pause"
  }
});


const tl = gsap.timeline({
  scrollTrigger: {
      trigger: "#chart-section",
      start: "top center",  
      end: "bottom bottom",  
      scrub: true,  
  }
});

tl.to("#chart-section", {
  scale: 0.5,  
  autoAlpha: 0,  
  ease: "none"
});

tl.from("#white-page", {
  y: 500,  
  autoAlpha: 0,  
  ease: "none"
}, "-=0.5"); 




//////




  });








