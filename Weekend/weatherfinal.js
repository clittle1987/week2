//variables
var googleMap = "https://maps.googleapis.com/maps/api/geocode/json?address=";
var googleKey = "&key=AIzaSyD3VP6H8LmxL13wLIcS6klH9yLrMxqqKt0";
var googleUrl = ("https://maps.googleapis.com/maps/api/geocode/json?address=") + zip + ("(&key=AIzaSyD3VP6H8LmxL13wLIcS6klH9yLrMxqqKt0)");
var darkskyApi = "https://api.darksky.net/forecast/";
var darkskyKey = "9a451f009690bf1c4cb3b721e22d623e";
var darkskyUrl = "https://api.darksky.net/forecast/9a451f009690bf1c4cb3b721e22d623e";
//variable testing below
   
   // input
$(function() {
    $("button#push").click (function (ev) {
        $("#temp");
        $("#location");
        $("#icon");
        $("#precip");

     var zipcode = $("#zip").val();
    if (!zip) return;


// location
        

      $.ajax ("https://maps.googleapis.com/maps/api/geocode/json?address=" + zipcode + "&key=AIzaSyD3VP6H8LmxL13wLIcS6klH9yLrMxqqKt0").done(function (data) {
        var lat = data.results[0].geometry.location.lat;
        var lng = data.results[0].geometry.location.lng;
      // 
        $("#location").append(data.results[0].address_components[1].long_name + ", ");
        $("#location").append(data.results[0].address_components[3].short_name + "<br />");

        console.log(data);

//weather
        
        
       $.ajax ("https://api.darksky.net/forecast/" + darkskyKey + "/" + lat + "," + lng, {dataType: "jsonp"}).done(function (data) {
            var temp = Math.round(data.currently.temperature);
            $("#temp").append(temp);
            $("icon").append("<img src=")
            
              

           
         });
       });
     });
   });
   
