

(function() {
    'use strict';

    const button = document.querySelector('button');
    const backgroundImage = document.getElementById('backgroundimage');

    const headerTitle = document.getElementById('headerTitle');
    const headerTitle2= document.getElementById('headerTitle2');

    const listH3s = document.querySelectorAll('.list h3');
    const listLis = document.querySelectorAll('.list ul li');


    button.addEventListener('click', function() {
        backgroundImage.src = 'images/Design157(1).png';

        headerTitle.classList.toggle('light');
        headerTitle2.classList.toggle('light');

        listH3s.forEach(function(h3) {
            h3.classList.toggle('light');
        });

        listLis.forEach(function(li) {
            li.classList.toggle('light');
        });
    });
})();



