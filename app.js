

var guessNum = Math.floor(Math.random()*10) + 1;
var attempt = 0;

while (attempt < 5) {
    var userInp = +prompt("Guess the number between 1 and 10:");
    alert(`Your guess is : ${userInp}`);

    if (userInp === guessNum) {
        alert(" Hurre! you win Doodh Wala Rooh Afza");
        break;
    } else if(userInp === guessNum + 1 || userInp === guessNum - 1) {
        alert(`Close enough to the correct answer. Please try again.`);
    }
    else {
        attempt++;
        if (attempt === 5) {
            alert(`Sorry, you've used all your attempts. The correct answer was ${guessNum}`);
        }
        else{
            alert(`Incorrect answer.You have ${5 - attempt} attempts left `);
        }
    }
    
}
