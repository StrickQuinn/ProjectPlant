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
        $('.level-container').hide()
        $('.correctAnswer').hide()
        $('.continue').hide()
        $('.next').hide()
        $('.plant-name').hide()
        $('#restart').hide()
        console.log('main page')
        $('game-result').hide()
    }
    startGame()

//when you click the start button, hide it and show modal
    $('#start').on('click', () => {
        $('#start').hide()
        $('.modal').show()
        console.log('start button')
        $('.auntB').hide()
    })
    
    //Click continue and have plant-name, img and next btn show
    $('.continue').on('click', () => {
        $('.plant-name').show()
        $('img').show()
        $('.continue').hide()
        $('.next').show()
        $('.result').hide()
    })

    //When you hit the restart button, hide all unnecessary containers, and set level valu back to example's
    $('.restart').on('click', () => {
        startGame()
        $('.wallet-container').hide()
        $('.level-container').hide()
        $('playerChoice').hide()
        $('#start').show()
        $('.plant-name').hide()
        $('.plant-img').hide()
        $('.correctAnswer').hide()
        $('.wallet-total').html('')
        score = 0
        $('.round-number').text('0')
        $('.level').text('Example')
        $('.question').html('What writing tool usually has an eraser?')
        $('#a').text('pen')
        $('#b').text('marker')
        $('#c').text('paintbrush')
        $('#d').text('pencil')
        $('.correctAnswer').text('pencil')
        $('.plant-name').html('Pencil Cactus<br /><i>Euphorbia tirucalli</i>')
        $('img').attr('src', 'https://i.imgur.com/qgkZx1s.jpg?1')
        totalDollars = 0


    })

    
})
