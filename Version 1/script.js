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
    
    let sections = gsap.utils.toArray('.lot');
    
    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".containers",
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + document.querySelector(".containers").offsetWidth
        }
      });

      AOS.init();

      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({
        duration: 3,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      })
    
      function raf(time) {
          lenis.raf(time)
          requestAnimationFrame(raf)
      }
    
      requestAnimationFrame(raf)
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.img',
          scrub: true,
          start: "top bottom",  
          end: "bottom top",
        }
      })
      .to('.img', {
        stagger: 0.2,
        y: -700,
        scrub: 1
      })
      

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