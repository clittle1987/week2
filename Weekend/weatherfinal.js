//keys
// Google Key --- key=AIzaSyD3VP6H8LmxL13wLIcS6klH9yLrMxqqKt0
// Google API -- https://maps.googleapis.com/maps/api/geocode/json?address=
// Darksky Key --- 9a451f009690bf1c4cb3b721e22d623e
// DarkSky API --- https://api.darksky.net/forecast/ 
// over all google ---- google api + zip + google key
// once that is retrieved, use the lat and lng results to get the dark sky results
// over all  darksky ---- https://api.darksky.net/forecast/9a451f009690bf1c4cb3b721e22d623e/ + results from google 


// steps
// enter zip code to request info from google
// once i get that info, i need to parse it using jQuery to confine the information into what i want. which is latitude and longitude
// darksky will use the zipcodes lat n lng results to provide that areas information 
// Parse the results using jQuery and ask for certain results

                        

// this function is retrieving data from google, next step is to parse if via jQuery so I can understand it so ill need to call on function "new test function
// to see if this works
function LatLong_Complete(result) {  //function LatLong_Complete is defined
  var lat = result.results[0].geometry.location.lat;
  var lng = result.results[0].geometry.location.lng;
  var local = lat + "," + lng;
  var city = result.results[0].address_components[1].long_name;
  var state = result.results[0].address_components[3].short_name;
  locationName = result.results[0].formatted_address;
  console.log(lat,lng,local,city,state);


  var darkSkyUrl ="https://api.darksky.net/forecast/9a451f009690bf1c4cb3b721e22d623e/" + lat + "," + lng;
  
  var ask = {                                     
    url: darkSkyUrl,
    dataType: "jsonp",
    success: darkSky
  };
  $.ajax(ask);                                        

} //function LatLong_Complete defined has ended
// should I call on this function?

function Loc1(city, state, postCode) {               // function loc is defined

  var area = "";                                        
  if (postCode.length != 0) {
    area = postCode.trim();
  }
  else if (city.length != 0 && state != 0) {
    area = city.trim() + ", " + state;
  }
  else {
    return;                               
  }

  var googleUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + area + "&key=AIzaSyDkN5p4kquTOqQ_1ZHFdEkZk2MIMbZhFy0";

  var ask = {                                               
    url: googleUrl,
    dataType: "jsonp",
    success: LatLong_Complete

};

  $.ajax(ask);                                              
}        // function loc defined ended
// should i call this function?


function push() {   // function push is defined                                   
  var zipCode = $("#postCode").val();
  console.log(zipcode);
  Loc1("","", zipCode);


  //need to call a function



};     // function push defined end
//should i call this function?

function postWeather() {                // function postWeather is defined                   
  var local = $(lat + "," + lng);
}       // function postWeather ended
// call this function?


$(function () {  // function anonomous defined
  $("#post").on("click", push);
}) // function anonomous ended
// should i call this function


function darkSky(result) {         // function DarkSky defined                                               
  rain = result.currently.precipProbability;                                            
  deTail = result.currently.summary;                            
  temp = result.currently.temperature;                             


  generateData();


};  // function DarkSky defined ended
// call this function

function replaceCard(bgCard) {                          //function replaceCard defined             
  var card = $("#myCard").html();                             


  card = card.replace("pic", bgCard.photoUrl);   
  card = card.replace("#loCate", bgCard.place);
  card = card.replace("0", bgCard.tempNow);
  card = card.replace("preCip", bgCard.percip);


  return card;                                                         

}   // function replaceCard end
// call this function


function generateData() {            // function generateData defined                                    
  var get = {
    percip: rain,
    heighs: high,
    lows: low,
    place: locationName,
    currentOutlook: deTail,
    tempNow: temp,
    photoUrl: "https://cdn4.iconfinder.com/data/icons/iconsland-weather/PNG/128x128/Sunny.png"
  };

  var html = replaceCard(get);                                       
  $("#deck").append(html);


}  // function generateData ended
// call this function
$(document).ready(function () {            
});





