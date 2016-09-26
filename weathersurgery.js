$(function(){
var weather= "https://api.darksky.net/forecast/b908e5cb0e40855083f622994f9ec836/37.8267,-122.4233";

  $.ajax(weather, { dataType: "jsonp"}).done(function(data) {
      console.log(data);
      $(".temp").append(data.currently.temperature);
      $(".maxtemp").append(data.daily.data[0].temperatureMax);
      $(".precip").append(data.daily.data[0].precipIntensity);
      $(".min").append(data.daily.data[0].temperatureMin);
     
      
         

  });

 });