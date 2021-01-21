let requestUrl = "http://api.openweathermap.org/data/2.5/weather?q=Lille&appid=ceab44cb41940918f042c4c52ab67a9d&lang=fr&units=metric ";


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

    $('#weatherIcone').html(response.sys.country);
    $('#weatherNameCities').html(response.name);
    $('#weatherTemperature').html(response.main.temp + "<br> min: "+ response.main.temp_min + " /max: " + response.main.temp_max);

    $('#wind').html("Vent: " + response.wind.speed + "<br>Humidité:" + response.humidity);

}




