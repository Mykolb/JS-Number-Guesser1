//game values
let min = 1,
    max = 10, 
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

//Ui elements
//interesting...can use querySelector to grab #id like getElementById
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');
// console.log('data for game:', game)
// console.log('data for minimum #:', minNum)
// console.log('data for maximum #:', maxNum)

//assign min & max
minNum.textContent = min;
maxNum.textContent = max;
//play again event listener
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload()
    }
})


//event listener for button
//working
guessBtn.addEventListener('click', function(){
    // console.log(guessInput.value) //logs a black number; black #'s are strings, so turn into string 
    let guess = parseInt(guessInput.value);
    // console.log(guess)//should return NAN on submit 
    

    //if/else or ternary here
    if(isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    //check if won
    if(guess === winningNum){

        gameOver(true,`${winningNum} is correct, you win!`)
        //game over, lost
    } else {
        guessesLeft -= 1;

        if(guessesLeft === 0){
        gameOver(false, `Game over, you lost. The correct number was ${winningNum}`)

    //disable input
    // guessInput.diabled = true
    // guessInput.style.borderColor = 'green'
    // setMessage(`${winningNum} is correct, You win`, 'green')
    } else {
        
        //same as saying guesses left = guesses - 1; wrong num
        //     //disable input
        // guessInput.diabled = true;
        // guessInput.style.borderColor = 'red'
        // setMessage(`Game Over you lost! The winning number is $${winningNum}`, 'red');
      
        //Game continues, answer wrong

        // change border color
        guessInput.style.borderColor = 'red';

        //clear input
        guessInput.value = '';
        setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red')
        }
    }
});

//Game over
function gameOver(won, msg){
    let color;
    won === true ? color = 'green' : color = 'red';

    guessInput.diabled = true;
    guessInput.style.borderColor = 'color';
    message.style.color = color;
    setMessage(msg);


    guessBtn.value = 'Play Again'
    guessBtn.className += 'play-again'
}

function getRandomNum(min, max){
    return (Math.floor(Math.random()*(max-min+1)+min))
}

//message fn 
function setMessage(msg, color) {
    message.textContent = msg;
     message.style.color =  color;
}


//    console.log(setMessage) 
//    console.log(message)