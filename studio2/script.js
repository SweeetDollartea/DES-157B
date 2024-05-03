    const mon =querySelector('#mon').addevenListener('click', function(){
        const morningimage = document.querySelector('#monSongImage');

        if (mon){
            morningimage.src="images/Lauren(I Can’t Stay Forever).png";
        }
    })

    async function getData() {
        const mysongs = await fetch('data/songs.json');
        const data = await mysongs.json();
        document.querySelector('#mon1').innerHTML = outputHTML(data);
        // console.log(data);
    }

    function outputHTML(data) {
        let html = '<p>';
        html += `${data.Monday.Morning} <br> ${data.Monday.Night}`;
        html += '</p>';
        return html;
    }
    
    getData();





















        // async function getData() {
    //     const mysongs = await fetch('data/data.json');
    //     const data = await mysongs.json();
    //     document.querySelector('#mon1').innerHTML = outputHTML(data.Monday);
    // }
    
    // function outputHTML(dayData) {
    //     const html = `<p>${dayData.Morning} <img src="${dayData.img1}" alt="Morning Song Image"> ${dayData.Night} <img src="${dayData.img2}" alt="Night Song Image"></p>`;
    //     return html;
    // }
    
    // function handleDayClick(event) {
    //     const dayId = event.target.id; 
    //     const dayData = getData(); 
    //     const divId = `${dayId}1`; 
    //     document.querySelector(`#${divId}`).innerHTML = outputHTML(dayData); 
    // }
    
    // const days = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];
    // days.forEach(day => {
    //     document.querySelector(`#${day}`).addEventListener('click', handleDayClick);
    // });
    
    // getData(); 