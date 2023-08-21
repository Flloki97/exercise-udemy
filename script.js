// function bmiCalculator(weight, height) {
//     var bmi = weight / Math.pow(height, 2);
//     return Math.round(bmi);
// }

// var bmi = bmiCalculator(95, 1.8);
// console.log(bmi);


// function randomNumber() {
//     var n = Math.random();
//     n = n * 6;
//     n = Math.floor(n) + 1;
//     return n;
// }

// console.log(randomNumber());





// function loveMeter() {
//     var yourName = prompt("Whats your name?");
//     var theirName = prompt("Whats their name?");
    
//     var loveScore = Math.random() * 100;
//     loveScore = Math.floor(loveScore) + 1;

//     if(loveScore >= 90) {
//         alert(yourName + " " + "loves " + theirName + " " + loveScore + "%" + "You love each other like Kanye loves Kanye");
//     } else {
//         alert(yourName + " " + "loves " + theirName + " " + loveScore + "%");
//     }
// }

// console.log(loveMeter());


var weight = prompt("What is your weight?");
var height = prompt("What is your height?");

function bmiCalculator(weight, height) {
    var bmi = weight / Math.pow(height, 2);
    var interpretation = Math.round(bmi);
    // return interpretation;

    if(interpretation < 18.5) {
        console.log("Your BMI is " + interpretation +", so you are underweight.")
    } else if (interpretation >= 18.5 && interpretation <= 24.9) {
        console.log("Your BMI is " + interpretation +", so you have a normal weight.")
    } else {
        console.log("Your BMI is " + interpretation +", so you are overweight.")
    }
}

console.log(bmiCalculator(weight, height));

