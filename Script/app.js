//start over

$(() => {
    $('button').on('click', e => {
        e.preventDefault()
    })

    //To start the game, hide the home button, the level container
    const homePage = () => {
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
    homePage()

//when you click the start button, hide it and show modal
    $('#start').on('click', () => {
        $('#start').hide()
        $('.modal').show()
        console.log('start button')
    })
    
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