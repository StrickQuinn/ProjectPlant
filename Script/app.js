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
        console.log('main page')
    }
    startGame()

//when you click the start button, hide it and show modal
    $('#start').on('click', () => {
        $('#start').hide()
        $('.modal').show()
        console.log('start button')
    })
    
    //Clicke continue and have plant-name, img and next btn show
    $('.continue').on('click', () => {
        $('.plant-name').show()
        $('img').show()
        $('.continue').hide()
        $('.next').show()
        $('.result').hide()
    })
})