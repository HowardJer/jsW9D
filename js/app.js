// function 1
// 2 sum of 2 arguments & multiply by 5

function sum(x, y) {
    return (x + y) * 5;

}

console.log("function 1  " + sum(6,8))


// function 2
// count characters in a string


function word(str) {
	var lng = str.length;
    // console.log(lng);
   
if(lng > 10) {
    console.log('function 2: "> 10" ' + true);
}

else if(lng <= 10) {
    console.log('function 2: "<= 10" '  + false);
}


}
    
var word1 = word("ffffffffffffffffff");





// function 3
// first element that starts with "ph"



var devices = ["copier", "philharmonic", "phillie cheesesteadk", "tablet", "fax", "desktop", "phone"]

function lookFor(devices) {
    return n = devices.startsWith("ph");
}

console.log("function 3: first word starting with 'ph' - "+ devices.find(lookFor))




