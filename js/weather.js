const API_KEY   = "b284fe8203f99ce0ed5cb3288460b5db";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;   
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data =>{
        const weatherContainer = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerHTML =  data.name;
        weatherContainer.innerHTML = data.weather[0].main;
    });
}
function onGeoError(){
    alert("Can't find you");
}




navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);