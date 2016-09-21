// Friends
    
var url =
"http://rest.learncode.academy/api/learncode/friends/57e2c0801ebec60100061858"
$.ajax(url, {method: "GET"}).done(function(data) {
    console.log(data);
    for (var d in data) {
        var text = data[d].name;
        $("#list").append('<li>' + text + '</li>');

    }
    
});

/*
                    First example
------------------------------------------------------------
$("#friend").click(function(ev) {
    console.log(ev.target);
});

var data = ["Michael", "Colby", "Rose", "Amanda", "Scott"];
  for (var i = 0; i < data.length; i++) {
     for(var i in data) {
         var text = data[i];
         $("#list").append("<li>") + text + "</li>");
     }
 });
---------------------------------------------------------
                   Another example 
  --------------------------------------------------------                 
$.ajax
("http://rest.learncode.academy/api/learncode/
friends/57e2c80c1ebec60100061872")
.done(function (data) {
     //Michael likes Bourbon
   $("#me").append(data.name + " likes " + data.drink);
});
});
----------------------------------------------------------------