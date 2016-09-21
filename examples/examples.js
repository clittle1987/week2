$(function () {

    var userJson = '{"firstName": "Michael","lastName": "Dowden","twitter": "@mrdowden"}';

    var user = JSON.parse(userJson);
    $(".card-bg").append("Hello, " + user.firstName);



    var mrd = {
        "firstName": "Michael",        "lastName": "Dowden",
        "twitter": "@mrdowden"
    }
    console.log(mrd);
    var jsonMRD = JSON.stringify(mrd); 
    console.log(jsonMRD);
    console.log(JSON.parse(jsonMRD));

    var nums = [{"one":1},{"two":2}];
    console.log(nums);
    var jsonNUMS = JSON.stringify(nums);
    console.log(jsonNUMS);
    console.log(JSON.parse(jsonNUMS));

    var json = '{"name":"batman"}';
    var obj = JSON.parse(json);
    console.log(obj.name);
    console.log(json.name);

});
