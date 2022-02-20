let day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

document.querySelector('.search').addEventListener(('click'),()=>{
    let name=document.querySelector('.search-box').value;
    if(name===""){
        alert("please enter the city!");
        return;
    }fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=f89858816e82a3f9f7b5a9f1a8d37cc9`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        document.querySelector('.city').textContent = `${data.name}, ${data.sys.country}`;
        let date = new Date();
        document.querySelector('.date').textContent = `${day[date.getDay()]} ${date.getDate()} ${month[date.getMonth()]} ${date.getFullYear()}`;
        document.querySelector('.temp').textContent = `${parseInt(data.main.temp-273.15)}°c`;
        document.querySelector('.weather').textContent = `${data.weather[0].main}`;
        document.querySelector('.hi-low').textContent = `${parseInt(data.main.temp_min-273.15)}°c / ${parseInt(data.main.temp_max-273.15)}°c`;
    })
    .catch(() => {
        alert("The city you entered is incorrect!");
    })
});
