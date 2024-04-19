

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

        listH4.classList.toggle('light');

        // listH3s.forEach(function(h3) {
        //     h3.classList.toggle('light');
        // });

        // listLis.forEach(function(li) {
        //     li.classList.toggle('light');
        // });
    });
})();



