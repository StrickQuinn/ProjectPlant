console.log('Hey you')
//New JS file to run the game code.
$ (() => {
    //Keep screen from auto-refresh when button is clicked
    $('button').on('click', (e) => {
        e.preventDefault();
    });

//create an array for the levels    
    const $example = $('#example')
    const $one = $('#one')
    const $two = $('#two')
    const $three = $('#three')
    const $four = $('#four')
    const $five = $('#five')

    const levelNumber = [$example, $one, $two, $three, $four, $five]
    console.log(levelNumber)



//create an object for the correct answers
    const correctChoice = {
        $example : 'pencil',
        $one : 'dragons',
        $two : 'pearls',
        $three : 'Pickles',
        $four : 'Donkey',
        $five : 'Chicken'
    }    















    // /////Will use a version of this to check player's choice
    // let $a = $('#a')
    // let $b = $('#b')
    // let $c = $('#c')
    // let $d = $('#d')
    // let $answer = $('.answer')
    // let correctChoice = $a.text()
    // const choice = () => {
    //     $a.on('click', () => {
    //         if ($a.text() == correctChoice) {
    //             $answer.text(correctChoice + ' is the correct!')
    //             console.log($answer.text())
    //         }else {
    //             $answer.text(correctChoice + ' is the no!')
    //             console.log($answer.text() + ' is incorrect')
    //         }
    //     })
    //     $b.on('click', () => {
    //         if ($b.text() == correctChoice) {
    //             console.log($b.text() + ' is correct')
    //         }else {
    //             console.log($b.text() + ' is incorrect')
    //         }
    //     })
    //     $c.on('click', () => {
    //         if ($c.text() == correctChoice) {
    //             console.log($c.text() + ' is correct')
    //         }else {
    //             console.log($c.text() + ' is incorrect')
    //         }
    //     })
    //     $d.on('click', () => {
    //         if ($d.text() == correctChoice) {
    //             console.log($d.text() + ' is correct')
    //         }else {
    //             console.log($d.text() + ' is incorrect')
    //         }
    //     })
    // }
    // choice()
})