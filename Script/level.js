console.log('Hey you')
//New JS file to run the game code.
$ (() => {
    //Keep screen from auto-refresh when button is clicked
    $('button').on('click', (e) => {
        e.preventDefault();
    });

<<<<<<< HEAD
//create an array for the levels    
    const $example = $('#example').text()
    const $one = $('#one')
    const $two = $('#two')
    const $three = $('#three')
    const $four = $('#four')
    const $five = $('#five')
    const levelNumber = [$example, $one, $two, $three, $four, $five]


//give player options to choose    
    let $a = $('#a').text()
    let $b = $('#b').text()
    let $c = $('#c').text()
    let $d = $('#d').text()
    playerAnswer = [$a, $b, $c, $d]
    console.log(playerAnswer[1])
=======
    




>>>>>>> tmp












    /////Will use a version of this to check player's choice

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