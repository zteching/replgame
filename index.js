let readlineSync = require('readline-sync');

const choices = ["Work", "Take a risk", "Chill"]

function startGame() {
console.log("__________________________________________________________________________");
console.log( "Let's play futures!");
console.log("__________________________________________________________________________");

    console.log('')
    const wouldLikeToPlay = readlineSync.keyInSelect(['Yes','No'], 'Would you like to play?');

    if (wouldLikeToPlay === 0) {
    firstQuestion();
    }else {
    process.exit();
    }
    console.log('')
}
function gameOver() {
    console.log('Would you like to play again?')
    const wouldLikeToPlay = readlineSync.keyInSelect(['Yes', 'No']);
    if (wouldLikeToPlay === 0) {
        firstQuestion();
      } else {
        console.log('Thanks for playing, see you again soon');
        process.exit();
}
}
function firstQuestion() {
    console.log( "You are going into your freshman year of High School..." );
    console.log('')
    console.log("What would you like to do with your future: [1]Go to college?, [2]Play a sport?, or [3]Get a job?")
    console.log('')
    console.log("")
    console.log("Your choice.")
    console.log ('')
    console.log("Work: Spend more time perfecting your craft!")
    console.log("Take a Risk: Fortune favors the bold!")
    console.log("Chill: 'If it's God will it will happen.'")
    console.log("__________________________________________________________________________");

    const questionOne = readlineSync.keyInSelect(choices, 'What did you decide?');

    console.log('')
        if(questionOne === 0){
        console.log('Congratulations, you got accepted into Emory because of your time spent studying!')
        sidebar1();

    }else if(questionOne === 1){
        console.log('You had an excellent senior season and the Pittsburgh Pirates chose you in the draft!')
         sidebar2();
    }else if(questionOne === 2){
        console.log('Your cousin hooked you up with a job at Home Depot!')
         sidebar3();
    }else{
        process.exit();
    return 
    }

}

function sidebar1() {
        console.log('')
        console.log('It is going to cost $40,000 for your first year at Emory. You take out a loan. Your balance is ($-40,000)');
        secondQuestion();
}

function sidebar2() {
        console.log('You recieved $100,000.');
        secondQuestion();       
}

function sidebar3() {
    console.log('You managed to save $15,000 by your senior year and some retail experience.');
    secondQuestion();       
}

function secondQuestion() { if (sidebar1 === 'Congratulations, you got accepted into Emory because of your time spent studying!') {
  return secondQuestionA();
}
    console.log('')
    console.log('')
    console.log("It is time to pick where you are going to live. Would you like to [1]Buy a beat up house and renovate, [2]Buy a fat house, [3]Stay with Mom and Dad? ")
    console.log('')
    console.log("Work: Spend more time perfecting your craft!")
    console.log("Take a Risk: Fortune favors the bold!")
    console.log("Chill: 'If it's God will it will happen.'")
    console.log("__________________________________________________________________________");
    const questionTwo = readlineSync.keyInSelect(choices, 'Who should take action?');
    console.log('')

    if(questionTwo === 1){
    console.log('WHY?!?!')
    console.log('You are broke no :( ')
    gameOver();

    }else if(questionTwo === 0){
    console.log('')
    console.log('Good move. A good hustle will always pay dividends. You made $15,000 on the value of the prpoerty going up.')
    thirdQuestion();

}else if(questionTwo === 2){
    console.log('')
    console.log('You might be boring but your pockets thank you for it. You gain +$15,000')
    thirdQuestion();

    gameOver();
    }else if(questionTwo === 3){
    console.log('')
    
    
    firstQuestion();
    }else{
    process.exit();
    return 
}
}

function thirdQuestion() {
    console.log('')
    console.log('')
    console.log("You have made it this far, it seems like you understand that investing is not where you bet it all, and being responsible is always the way to go.")
    console.log('You are now 40 years old. Would you like to [1] Keep working, [2] Gamble, [3] Keep living with your parents')
    console.log('')
    console.log("Work: Spend more time perfecting your craft!")
    console.log("Take a Risk: Fortune favors the bold!")
    console.log("Chill: 'If it's God will it will happen.'")
    console.log("__________________________________________________________________________");
    const questionThree = readlineSync.keyInSelect(choices, 'What will you do?');
    console.log('');

    if(questionThree === 0){
    console.log('You won, lets play again!');
    firstQuestion();
        }else if(questionThree === 1){
    console.log('You lost all your money! Lets try this again.');
    firstQuestion();
    }else if(questionThree === 2){
    console.log('Easy like Sunday morning eh? Still in your parents house at 40?');
    gameOver();
    }else{
    process.exit();
    return 
}
}

startGame()