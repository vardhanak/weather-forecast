//Complete the Weather API Backend part using openweathermap api
var apikey = 'f89858816e82a3f9f7b5a9f1a8d37cc9';
var msg = document.getElementById("msg");

function getData(){
    var input = document.getElementById("city").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q={input}&appid={apikey}@units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById("p1").innerHTML = "Temp: "+data.main.temp;
        document.getElementById("p2").innerHTML = "Temp: "+data.name;
        var icon = "https://api.openweather.org/img/w"+data.weather[0].icon+".png";
        document.getElementById("icon").src = icon;
    })
    .catch(() => {
        msg.textcontent = "please search for a valid city"
    })
}