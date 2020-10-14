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


    

})