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
    $('#play').on('click', () => {
        totalLevels[0].show()
        $('.wallet-container').show()
        $('.modal').hide()
        $('.level-container').show()
    })


    //Determine current level, before collecting response
    const currentLevel = () => {
        if (totalLevels[0]) {
            $a = $('#a0')
            $b = $('#b0')
            $c = $('#c0')
            $d = $('#d0')
            $correct = $('.correctAnswer0')
            console.log($a.text())
            console.log($correct.text())
        }
    }

    const playerAnswer = () => {
        let $result = $('.result');
        currentLevel();
        $correct.hide()
        if ($a.on('click', () => {
            $('.playerChoice').hide()
            $('.continue').show()
            if ($a.text() === $correct.text()) {
                $result.text('That is correct!')
                console.log('yay')
                totalDollars()
            }else {
                $result.text('That is incorrect. The correct answer is ' + $correct.text() + '.')
                console.log('oh no')
            }
            $('.result').show()
        }))
        if ($b.on('click', () => {
            $('.playerChoice').hide()
            $('.continue').show()
            if ($b.text() === $correct.text()) {
                $result.text('That is correct!')
                console.log('yay')
                totalDollars()
            }else {
                $result.text('That is incorrect. The correct answer is ' + $correct.text() + '.')
                console.log('oh no')
            }
            $('.result').show()
        }))
        if ($c.on('click', () => {
            $('.playerChoice').hide()
            $('.continue').show()
            if ($c.text() === $correct.text()) {
            $result.text('That is correct!')
                
                totalDollars()
            }else {
                $result.text('That is incorrect. The correct answer is ' + $correct.text() + '.')
            }
            $('.result').show()
        }))
        ($d.on('click', () => {
            $('.playerChoice').hide()
            $('.continue').show()
            if ($d.text() === $correct.text()) {
            $result.text('That is correct!')
                
                totalDollars()
            }else {
                $result.text('That is incorrect. The correct answer is ' + $correct.text() + '.')
            }
            $('.result').show()
        }))
    }
    playerAnswer()























    //Click continue and have plant-name, img and next btn show
    $('.continue').on('click', () => {
        $('.plant-name').show()
        $('img').show()
        $('.continue').hide()
        $('.next').show()
        $('.result').hide()
    })

    //When you close the modal screen, let you play the game

})
