(function(){
    'use strict';

    var map = L.map('map').setView([33.702300, -117.752216], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([33.702300, -117.752216]).addTo(map);

    marker.bindPopup("<b>Yo</b><br>This my house.").openPopup();

    var circle = L.circle([33.697292, -117.741297], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);

    var polygon = L.polygon([
        [33.676725, -117.721225],
        [33.671475, -117.722642],
        [33.672047, -117.732519]
    ]).addTo(map);
    
}());