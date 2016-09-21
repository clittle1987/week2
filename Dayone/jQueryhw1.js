
//$(document).ready(function () {
  //  $(function() {
  //      $("button#add")
   //  $("add") ~= document.getElementById("add")
 //   $(".list") ~= document.gtElementsByClassName("list")

 // $("button#add").on("click", function(ev) {
// $("button#add").click(function(ev /* event */) {  
 //    var newCar = $("newcar")
    // .val();   --- one way
   /* if(newCar == "") return;

    
     $("#list").append("<li>")
     + newCar + "</li>");
     $("#newcar").val("");
   });

})



} 
*/

$(document).ready(function() {
   $('button#add').click(function(ev) {
       var amMo = $('#ammo').val();
       if(amMo =="") return;
   $('#list').append('<li>' + amMo + '</li>');
   });

});