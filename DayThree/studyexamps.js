$(document).ready(function(){

$.ajax
("http://rest.learncode.academy/api/learncode/friends/57e2c80c1ebec60100061872")
.done(function (data) {
     
     
   $("#me").append(data.name + " likes " + data.drink);
});
   });



