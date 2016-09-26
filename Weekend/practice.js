var darkSky = "https://api.darksky.net/forecast/";
var darkskyKey = "9a451f009690bf1c4cb3b721e22d623e";
var googleMap = "https://maps.googleapis.com/maps/api/geocode/json?address=";
var googleKey = "&key=AIzaSyD3VP6H8LmxL13wLIcS6klH9yLrMxqqKt0";
var temp;
var loc = result.results[0].address_components[1].short_name + "," +
          result.results[0].address_components[3].short_name;
var icon;
var precip;
var wind;
var direction;
var lat = result.results["0"].geometry.location.lat;
var long = result.results["0"].geometry.location.lng;


$.ajax (function update (zip) {
       var urlLoc = (googleMap + "zip" + zip + "&googleKey=" + googleKey);
       var urlTemp = (darkSky + "zip" + zip + "&darkskyKey" + darkskyKey);
       sendRequest(url);

$.ajax (function sendRequest(urlTemp) {
         $.ajax(darkSky + zip + darkskyKey, { dataType: "jsonp"}).done(function (dataTemp) {
         $("#precip").append(data.currently.precipProbability);
         $("#temp").append(data.currently.temperature);
         
})


$.ajax (function sendRequest(urlLoc) {
       $.ajax(googleMap + zip + googleKey, { dataType: "jsonp"}).done(function (dataLoc) {
        
})
        


function update(weather) {
    wind.innerHTML = weather.wind;
    direction.innerHTML = weather.direction;
    humidity.innerHTML = weather.humidity;
    loc.innerHTML = weather.loc;
    temp.innerHTML = weather.temp;
    icon.src = "Users/jasonbently/Desktop/TEKY-1/Mywork/weektwo/Weekend/" + weather.icon + ".png";
    console.log();



window.onload = function () {
    temp = document.getElementById("temperature");
    loc = document.getElementById("location");
    icon = document.getElementById("icon");
    humidity = document.getElementById("humidity");
    wind = document.getElementById("wind");
    direction = document.getElementById("direction");

var weather = {} ;
weather.temp = 22;
weather.wind = 3.5;
weather.direction = "S";
weather.humidity = 35;
weather.loc = "Kentucky";
weather.icon = "sun";




    update(weather);
} 
});
    });
});

