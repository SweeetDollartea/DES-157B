(function(){
    'use strict';

    AOS.init();
    
    const ctx = document.getElementById('myChart');
    const ctx1= document.getElementById('myChart2');

      
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

    new Chart(ctx1, {
        type: 'doughnut',
        data: {
          labels: ['China', 'Brazil', 'Vietnam', 'Australia', 'India','Thailand'],
          datasets: [{
            label: 'REE mined in thousands of tons in the 19th century',
            data: [100,85, 45, 118, 200, 35],
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


