
        
        function outputHTML1(data) {
            let html = '<p>';
            html += `<span id="mondaymornsong">${data.Monday.Morning}</span>`
            html += `<span id="mondaynightsong">${data.Monday.Night}</span>`
            html += `<img id="monSongImagemorn" src="${data.Monday.img1}" alt="Morning Song Image" style="display: block;">`; 
            html += `<img id="monSongImagenight" src="${data.Monday.img2}" alt="Morning Song Image" style="display: block;">`; 
            html += '</p>';
            return html;
        }
        
        document.querySelector('#mon').addEventListener('click', function() {
            getData().then(data => {
                document.querySelector('#mon1').innerHTML = outputHTML1(data);
            });
        });

        function outputHTML2(data) {
            let html = '<p>';
            html += `<span id="tuesdaymornsong">${data.Tuesday.Morning}</span>`
            html += `<span id="tuesdaynightsong">${data.Tuesday.Night}</span>`
            html += `<img id="tuesSongImagemorn" src="${data.Tuesday.img1}" style="display: block;">`; 
            html += `<img id="tuesSongImagenight" src="${data.Tuesday.img2}" style="display: block;">`; 
            html += '</p>';
            return html;
        }

        document.querySelector('#tues').addEventListener('click', function() {
            getData().then(data => {
                document.querySelector('#tues1').innerHTML = outputHTML2(data);
            });
        });

        function outputHTML3(data) {
            let html = '<p>';
            html += `<span id="Wednesdaymornsong">${data.Wednesday.Morning}</span>`
            html += `<span id="Wednesdaynightsong">${data.Wednesday.Night}</span>`
            html += `<img id="wedSongImagemorn" src="${data.Wednesday.img1}" alt="Morning Song Image" style="display: block;">`; 
            html += `<img id="wedSongImagenight" src="${data.Wednesday.img2}" alt="Morning Song Image" style="display: block;">`; 
            html += '</p>';
            return html;
        }

        document.querySelector('#wed').addEventListener('click', function() {
            getData().then(data => {
                document.querySelector('#wed1').innerHTML = outputHTML3(data);
            });
        });

        function outputHTML4(data) {
            let html = '<p>';
            html += `<span id="Thursdaymornsong">${data.Thursday.Morning}</span>`
            html += `<span id="Thursdaynightsong">${data.Thursday.Night}</span>`
            html += `<img id="thursSongImagemorn" src="${data.Thursday.img1}" alt="Morning Song Image" style="display: block;">`; 
            html += `<img id="thursSongImagenight" src="${data.Thursday.img2}" alt="Morning Song Image" style="display: block;">`; 
            html += '</p>';
            return html;
        }

        document.querySelector('#thurs').addEventListener('click', function() {
            getData().then(data => {
                document.querySelector('#thurs1').innerHTML = outputHTML4(data);
            });
        });

        function outputHTML5(data) {
            let html = '<p>';
            html += `<span id="Fridaymornsong">${data.Friday.Morning}</span>`
            html += `<span id="Fridaynightsong">${data.Friday.Night}</span>`
            html += `<img id="friSongImagemorn" src="${data.Friday.img1}" alt="Morning Song Image" style="display: block;">`; 
            html += `<img id="friSongImagenight" src="${data.Friday.img2}" alt="Morning Song Image" style="display: block;">`; 
            html += '</p>';
            return html;
        }

        document.querySelector('#fri').addEventListener('click', function() {
            getData().then(data => {
                document.querySelector('#fri1').innerHTML = outputHTML5(data);
            });
        });

        function outputHTML6(data) {
            let html = '<p>';
            html += `<span id="Saturdaymornsong">${data.Saturday.Morning}</span>`
            html += `<span id="Saturdaynightsong">${data.Saturday.Night}</span>`
            html += `<img id="satSongImagemorn" src="${data.Saturday.img1}" alt="Morning Song Image" style="display: block;">`; 
            html += `<img id="satSongImagenight" src="${data.Saturday.img2}" alt="Morning Song Image" style="display: block;">`; 
            html += '</p>';
            return html;
        }

        document.querySelector('#sat').addEventListener('click', function() {
            getData().then(data => {
                document.querySelector('#sat1').innerHTML = outputHTML6(data);
            });
        });

        function outputHTML7(data) {
            let html = '<p>';
            html += `<span id="Sundaymornsong">${data.Sunday.Morning}</span>`
            html += `<span id="Sundaynightsong">${data.Sunday.Night}</span>`
            html += `<img id="sunSongImagemorn" src="${data.Sunday.img1}" alt="Morning Song Image" style="display: block;">`; 
            html += `<img id="sunSongImagenight" src="${data.Sunday.img2}" alt="Morning Song Image" style="display: block;">`; 
            html += '</p>';
            return html;
        }

        document.querySelector('#sun').addEventListener('click', function() {
            getData().then(data => {
                document.querySelector('#sun1').innerHTML = outputHTML7(data);
            });
        });
        
        async function getData() {
            const mysongs = await fetch('data/songs.json');
            const data = await mysongs.json();
            return data;
        }
        












