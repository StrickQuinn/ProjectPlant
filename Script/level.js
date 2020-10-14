console.log('Hey you')
//New JS file to run the game code.
$ (() => {
    //Keep screen from auto-refresh when button is clicked
    $('button').on('click', (e) => {
        e.preventDefault();
    });


















//create a fxn to check for the correct answer
const checkAnswer = () => {
    if ($('.playerAnswer') == $('.correctAnswer')) {
        console.log('This is the correct answer')
    }else {
        console.log('This is the wrong answer')
    }
}














})