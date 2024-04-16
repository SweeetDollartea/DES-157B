(function(){
    'use strict';

    const expandscreen = document.querySelector(".fa-expand");

    expandscreen.addEventListener('click', function(){
        if (!document.fullscreenElement){
            document.documentElement.requestFullscreen();
        }
        else{
            document.exitFullscreen();
        }
    });

})();