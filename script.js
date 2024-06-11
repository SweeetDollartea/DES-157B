

(function() {
    'use strict';

    const button = document.querySelector('button');
    const backgroundImage = document.getElementById('backgroundimage');

    const headerTitle = document.getElementById('headerTitle');
    const headerTitle2= document.getElementById('headerTitle2');

    const listH4 = document.querySelectorAll('.listh4');
    const listLis = document.querySelectorAll('.list ul li');


    button.addEventListener('click', function() {
        backgroundImage.src = 'images/Design157L.png';

        headerTitle.classList.toggle('light');
        headerTitle2.classList.toggle('light');


    });
})();




