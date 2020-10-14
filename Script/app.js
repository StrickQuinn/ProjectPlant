//start over

$(() => {
    $('button').on('click', e => {
        e.preventDefault()
    })

    //To start the game, hide the home button, the level container
    const startGame = () => {
        $('#home').hide()
        $('.level-container').hide()
        $('.correctAnswer').hide()
        console.log('main page')
    }
    startGame()

//when you click the start button, hide it and show modal
    $('#start').on('click', () => {
        $('#start').hide()
        $('.modal').show()
        console.log('start button')
    })

    //when you click the play button, show the level container
    let $div = $('<div>').addClass('level').attr('id', '0')
    $('#play').on('click', () => {
        $('.modal').hide()
        $('.level-container').show()
        playerAnswer();
    })


    //when you click the a button, if the text equals correctAnswer text, you are correct;
    //hide choice buttons
    let $a = $('#a').text()
    let $b = $('#b').text()
    let $c = $('#c').text()
    let $d = $('#d').text()
    let $correct = $('.correctAnswer').text()
    let $result = $('.result')
    

    //create a playGame fxn to wrap whether or not the answer is correct
    //when the button is clicked, remove all buttons
    const playerAnswer = () => {
        $('#a').on('click', () => {
            $('.playerChoice').hide()
            if ($a === $correct) {
                $result.text('correct')
            }else {
                $result.text('incorrect')
            }
        });
        $('#b').on('click', () => {
            $('.playerChoice').hide()
            if ($b === $correct) {
                $result.text('correct')
            }else {
                $result.text('incorrect')
            }
        });
        $('#c').on('click', () => {
            $('.playerChoice').hide()
            if ($c === $correct) {
                $result.text('correct')
            }else {
                $result.text('incorrect')
            }
        });
        $('#d').on('click', () => {
            $('.playerChoice').hide()
            if ($d === $correct) {
                console.log('yay')
                $result.text('correct')
            }else {
                $result.text('incorrect')
            }
        })
    }

    const showResult = () => {
        if (playerAnswer() == true) {
            $('#result').text('Correct!')
            console.log('yippee')
        }else {
            $('#result').text('sad')
        }
    }
    showResult()
})