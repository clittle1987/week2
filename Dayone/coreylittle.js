// Name, TA Name, Date
//corey little , Scott, 9 - 19 - 16
// Problem 1 
//----------------------------------
// Example Question 
/*var numArray = [18, 24, 57, 98, 45, 27, 3, 456, 3, 35, 85];

var i = numArray.indexOf (27, 0);

console.log(i);


// Problem 2 
var numArray = [18, 24, 57, 98, 45, 27, 3, 456, 3, 35, 85];

var total = 0;

for(index in numArray) {
    total += numArray[index];
}

console.log(total);


// Problem 3
var newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

newArray.pop();

console.log(newArray);

// Problem 4 
console.log("Problem 4");
// teacher way
var testNoMoreThan25 = function(a, b) {
    // return (a + b <= 25);
    var sum = a + b;
    if (sum <= 25) {
        return true;
    } else {
        return false;
    }
}
console.log();
console.log();
console.log();

// sondra way

function lessThan(num1, num2) {
    if(num1 + num2 <= 25) {
        return "true";
    } else {
        return "false";
    }
}

var i = lessThan(14,10);
console.log(i);
// Problem 5 
var string1 = ("I'm catching on ");
var string2 = ("I think");
var sum = string1.length + string2.length;

function combine(string1, string2) {
    if( sum > 12) {
        return "Error, string too long";
    } else {
        return sum;
    }
}

var ie = combine (" ");
console.log(ie);

*/
// Problem 6


var num = 0
do{
    num++
    console.log("Very Low Number")
} while( num <= 5);

var num1 = 6
do {
    num1++
    console.log("Low Number")
} while ( num1 <= 10);

var num2 = 11
do{
    num2++
    console.log("High Number")
} while (num2 <= 15);

var num3 = 16
do {
    num3++
    console.log("Very High Number")
} while ( num3 <= 20);