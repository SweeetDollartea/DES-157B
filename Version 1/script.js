(function() {
    'use strict';

    gsap.from('.firsttext',{ duration: 1.5, y: '-700%'})
    gsap.to('.firsttext', {
        ScrollTrigger: {
            trigger: '.firsttext',
            toggleActions: "restart pause resume none"
        }
    });



    document.addEventListener('DOMContentLoaded', function() {
        gsap.registerPlugin(ScrollTrigger);
    
        let container3 = document.querySelector('.container3');
    
        gsap.to(container3, {
            x: () => -(container3.scrollWidth - window.innerWidth) + "px", // This moves container3 to the left
            ease: "none",
            scrollTrigger: {
                trigger: container3,
                start: "top end",  
                end: () => `+=${container3.scrollWidth}`,  
                pin: true, 
                scrub: 1,
                horizontal: true,
                markers: true 
            }
        });
    });
})();