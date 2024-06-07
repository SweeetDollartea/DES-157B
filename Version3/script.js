(function() {
    'use strict';

    gsap.from('.firsttext',{ duration: 1.5, y: '-400%'})
    gsap.to('.firsttext', {
        ScrollTrigger: {
            trigger: '.firsttext',
            toggleActions: "restart pause resume none"
        }
    });

    gsap.registerPlugin(ScrollTrigger);
    
    let sections0 = gsap.utils.toArray('.lot');
    
    gsap.to(sections0, {
        xPercent: -100 * (sections0.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".containers",
          pin: true,
          scrub: 1,
          snap: 1 / (sections0.length - 1),
          end: () => "+=" + document.querySelector(".containers").offsetWidth
        }
      });


      gsap.fromTo(".textScroller", 
    {
        y: 100  
    }, 
    {
        y: 0,  
        scrollTrigger: {
            trigger: ".top",
            start: "top center", 
            end: "bottom center",
            scrub: true
        }
    }
);

    gsap.from('.desktopContent',{duration:3 , x:'-400%'})
    gsap.to('.desktopContent', {
      ScrollTrigger: {
          trigger: '.desktopContent',
          toggleActions: "play pause restart none"
      }
  });
    

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



      AOS.init();





      let photo = gsap.utils.toArray('.photo');
    
      gsap.to(photo, {
          xPercent: -100 * (photo.length - 1),
          ease: "none",
          scrollTrigger: {
            trigger: ".photogallery",
            pin: true,
            scrub: 1,
            snap: 1 / (photo.length - 1),
            end: () => "+=" + document.querySelector(".photogallery").offsetWidth
          }
        });








      // const lenis = new Lenis({
      //   duration: 3,
      //   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      // })
    
      // function raf(time) {
      //     lenis.raf(time)
      //     requestAnimationFrame(raf)
      // }
    
      // requestAnimationFrame(raf)
      
      // const tl = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: '.img',
      //     scrub: true,
      //     start: "top 60%",  
      //     end: "bottom 20%",
      //   }
      // })
      // .to('.img', {
      //   stagger: 0.2,
      //   y: -700,
      //   scrub: 1
      // })
      

    

      const ctx = document.getElementById('myChart');

      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['1980', '1990', '2000', '2010', '2020', '2030','2040', '2050', '2060', '2070', '2080'],
          datasets: [{
            label: 'Demand of Predicted Use of REE',
            data: [3, 4, 6, 10, 20, 40, 80, 160, 290, 410, 800],
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


})();