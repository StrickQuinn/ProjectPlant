//start over

$(() => {
    $('button').on('click', e => {
        e.preventDefault()
    })

    //To start the game, hide the home button, the level container
    const startGame = () => {
        $('.end-container').hide()
        $('.wallet-container').hide()
        $('#home').hide()
        $('.correctAnswer').hide()
        $('.continue').hide()
        $('.next').hide()
        $('.plant-name').hide()
        console.log('main page')
    }
    startGame()

//when you click the start button, hide it and show modal
    $('#start').on('click', () => {
        $('#start').hide()
        $('.modal').show()
        console.log('start button')
        checkAnswer0()
    })
    

    //make levels easier to grab
    const $level0 = $('.level-container-0')
    const $level1 = $('.level-container-1')
    const $level2 = $('.level-container-2')
    const $level3 = $('.level-container-3')
    const $level4 = $('.level-container-4')
    const $level5 = $('.level-container-5')

    const totalLevels = [$level0, $level1, $level2, $level3, $level4, $level5]

    //when you click on X in the modal, modal hids, wallet shows, example shows
    $('#play').on('click', (e) => {
        e.preventDefault
        totalLevels[0].show()
        $('.wallet-container').show()
        $('.modal').hide()
        $('.level-container').show()
    })




    //make money easier to calculate
    const $walletTotal0 = $('.wallet-total0')
    const $walletTotal1 = $('.wallet-total1')
    const $walletTotal2 = $('.wallet-total2')
    const $walletTotal3 = $('.wallet-total3')
    const $walletTotal4 = $('.wallet-total4')
    const $walletTotal5 = $('.wallet-total5')


    //////////////////////
    //Level 0
    /////////////////////
    //Determine current level, before collecting response
    const currentLevel0 = () => {
        if (totalLevels[0]) {
            $a = $('#a0')
            $b = $('#b0')
            $c = $('#c0')
            $d = $('#d0')
            $correct = $('.correctAnswer0')
            // console.log($a.text())
            // console.log($correct.text())
        }
    }
    

    //set variables for score and wallet total


    //Depending on what level you on, determine the answer result, and whether or not player gets points
    const checkAnswer0 = () => {
        let $result = $('.result');
        currentLevel0();
        $correct.hide()
        if ($a.on('click', () => {
            $('.playerChoice').hide()
            $('.continue').show()
            if ($a.text() === $correct.text()) {
                $result.text('That is correct!')
                console.log('yay')
                let newScore = 1
                console.log('a ' + newScore)
                $walletTotal0.text(newScore)
            }else {
                $result.text('That is incorrect. The correct answer is ' + $correct.text() + '.')
                console.log('oh no')
                let newScore = 0
                $walletTotal0.text(newScore)
            }
            $('.result').show()
        }))
        if ($b.on('click', () => {
            $('.playerChoice').hide()
            $('.continue').show()
            if ($b.text() === $correct.text()) {
                $result.text('That is correct!')
                console.log('yay')
                newScore = 1
                console.log('b ' + newScore)
                $walletTotal0.text(newScore)
            }else {
                $result.text('That is incorrect. The correct answer is ' + $correct.text() + '.')
                console.log('oh no')
                let newScore = 0
                $walletTotal0.text(newScore)
            }
            $('.result').show()
        }))
        if ($c.on('click', () => {
            $('.playerChoice').hide()
            $('.continue').show()
            if ($c.text() === $correct.text()) {
                $result.text('That is correct!')
                newScore = 1
                console.log('c ' + newScore)
                $walletTotal0.text(newScore)
            }else {
                $result.text('That is incorrect. The correct answer is ' + $correct.text() + '.')
                let newScore = 0
                $walletTotal0.text(newScore)
            }
            $('.result').show()
        }))
        ($d.on('click', () => {
            $('.playerChoice').hide()
            $('.continue').show()
            if ($d.text() === $correct.text()) {
                $result.text('That is correct!')
                newScore = 1
                console.log('d ' + newScore)
                $walletTotal0.text(newScore)
            }else {
                $result.text('That is incorrect. The correct answer is ' + $correct.text() + '.')
                let newScore = 0
                $walletTotal0.text(newScore)
            }
            $('.result').show()
        }))
    }




 //////////////////////
    //Level 1
    /////////////////////
    const currentLevel1 = () => {
        if (totalLevels[1]) {
            $a = $('#a1')
            $b = $('#b1')
            $c = $('#c1')
            $d = $('#d1')
            $correct = $('.correctAnswer1')
            // console.log($a.text())
            // console.log($correct.text())
        }
    }
    const checkAnswer1 = () => {
        const $walletTotal1 = $('.wallet-total0')
        let $result = $('.result');
        currentLevel1();
        $correct.hide()
        if ($a.on('click', () => {
            $('.playerChoice').hide()
            $('.continue').show()
            if ($a.text() === $correct.text()) {
                $result.text('That is correct!')
                console.log('yay')
                console.log($walletTotal0.())
                let newScoreA = ($walletTotal0.text() + 1)
                console.log('a ' + newScoreA)
                $walletTotal1.text(newScoreA)
            }else {
                $result.text('That is incorrect. The correct answer is ' + $correct.text() + '.')
                console.log('oh no')
                let newScoreA = newScore
                $walletTotal1.text(newScoreA)
            }
            $('.result').show()
        }))
        if ($b.on('click', () => {
            $('.playerChoice').hide()
            $('.continue').show()
            if ($b.text() === $correct.text()) {
                $result.text('That is correct!')
                console.log('yay')
                let newScoreA = $walletTotal0.text() + 1
                console.log('a ' + newScoreA)
                $walletTotal1.text(newScoreA)
            }else {
                $result.text('That is incorrect. The correct answer is ' + $correct.text() + '.')
                console.log('oh no')
                let newScoreA = newScore
                $walletTotal1.text(newScoreA)
            }
            $('.result').show()
        }))
        if ($c.on('click', () => {
            $('.playerChoice').hide()
            $('.continue').show()
            if ($c.text() === $correct.text()) {
                $result.text('That is correct!')
                let newScoreA = $walletTotal0.text() + 1
                console.log('a ' + newScoreA)
                $walletTotal1.text(newScoreA)
            }else {
                $result.text('That is incorrect. The correct answer is ' + $correct.text() + '.')
                let newScoreA = newScore
                $walletTotal1.text(newScoreA)
            }
            $('.result').show()
        }))
        ($d.on('click', () => {
            $('.playerChoice').hide()
            $('.continue').show()
            if ($d.text() === $correct.text()) {
                $result.text('That is correct!')
                let newScoreA = $walletTotal0.text() + 1
                console.log('a ' + newScoreA)
                $walletTotal1.text(newScoreA)
            }else {
                $result.text('That is incorrect. The correct answer is ' + $correct.text() + '.')
                let newScoreA = newScore
                $walletTotal1.text(newScoreA)
            }
            $('.result').show()
        }))
    }
    checkAnswer1()

   
    


    //Click continue and have plant-name, img and next btn show
    $('.continue').on('click', () => {
        $('.plant-name').show()
        $('img').show()
        $('.continue').hide()
        $('.next').show()
        $('.result').hide()
    })


    $('.next').on('click', () => {
        checkAnswer1()
        $level0.hide()
        $level1.show()
        $('.playerChoice').show()
        console.log('next btn')
        $('img').hide()
        $('.plant-name').hide()
        $('.next').hide()
    })

})
