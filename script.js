// function bmiCalculator(weight, height) {
//     var bmi = weight / Math.pow(height, 2);
//     return Math.round(bmi);
// }

// var bmi = bmiCalculator(65, 1.8);
// console.log(bmi);


// function randomNumber() {
//     var n = Math.random();
//     n = n * 6;
//     n = Math.floor(n) + 1;
//     return n;
// }

// console.log(randomNumber());





function loveMeter() {
    var yourName = prompt("Whats your name?");
    var theirName = prompt("Whats their name?");
    
    var loveScore = Math.random() * 100;
    loveScore = Math.floor(loveScore) + 1;

    if(loveScore >= 90) {
        alert(yourName + " " + "loves " + theirName + " " + loveScore + "%" + "You love each other like Kanye loves Kanye");
    } else {
        alert(yourName + " " + "loves " + theirName + " " + loveScore + "%");
    }
}

console.log(loveMeter());

