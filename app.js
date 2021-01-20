
//let requestUrl = "http://api.openweathermap.org/data/2.5/weather?id=524901&appid=ceab44cb41940918f042c4c52ab67a9d&q=Lille";
let requestUrl = "http://api.openweathermap.org/data/2.5/weather?q=Lille&appid=ceab44cb41940918f042c4c52ab67a9d&lang=fr";


let xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl)
xhr.responseType = 'json';
xhr.send();

xhr.onload = function (){
    if (xhr.status === 200){
        console.log('OK!');
    }

    let response = xhr.response;
    console.log(response);

    document.getElementById('weatherIcone').innerHTML = response.weather.icon ;
    document.getElementById('weatherNameCities').innerHTML = response.name;
    document.getElementById('weatherTemperature').innerHTML = response.main.temp;



}




