(function(){
    'use strict';

    const expandscreen = document.querySelector(".fa-expand");
    const myvideo=document.getElementById("fireworks");

    const line1=document.getElementById("first");
    const line2=document.getElementById("second");
    const line3=document.getElementById("third");
    const line4=document.getElementById("fourth");
    const line5=document.getElementById("fifth");
    const line6=document.getElementById("sixth");

    const intervalID = setInterval(checkTime,1000);

    // const poem={
    //     start:[1,3.5,6,8.5,11,13.5,17],
    //     stop:[2.5,5,8,10.5,13,15.5, 18.5],
    //     line: [line1, line2, line3, line4, line5, line6]
    // }

    // function checkTime() {
    //     for(let i=0;i<poem.start.length;i++){
    //         if (poem.start[i]<myvideo.currentTime && myvideo.currentTime<poem.stop[i]){
    //             poem.line[i].className="showing";
    //         }else{
    //             poem.line[i].className="hidden";
    //         }
    //     }
    // }

    function checkTime(){
        if (1<myvideo.currentTime && myvideo.currentTime<3.5){
            line1.className="showing";
        }
        else{
            line1.className="hidden";
        }
        if (3.5<myvideo.currentTime && myvideo.currentTime<6){
            line2.className="showing";
        }
        else{
            line2.className="hidden";
        }
        if (6<myvideo.currentTime && myvideo.currentTime<8.5){
            line3.className="showing";
        }
        else{
            line3.className="hidden";
        }
        if (8.5<myvideo.currentTime && myvideo.currentTime<11){
            line4.className="showing";
        }
        else{
            line4.className="hidden";    
        }
        if (11<myvideo.currentTime && myvideo.currentTime<13.5){
            line5.className="showing";
        }
        else{
            line5.className="hidden";    
        }
        if (13.5<myvideo.currentTime && myvideo.currentTime<15){
            line6.className="showing";
        }
        else{
            line6.className="hidden";    
        }
    }

    expandscreen.addEventListener('click', function(){
        if (!document.fullscreenElement){
            document.documentElement.requestFullscreen();
        }
        else{
            document.exitFullscreen();
        }
    })


    


})();