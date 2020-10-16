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





    //Clicke continue and have plant-name, img and next btn show
    $('.continue').on('click', () => {
        $('.plant-name').show()
        $('img').show()
        $('.continue').hide()
        $('.next').show()
        $('.result').hide()
    })

    //When you close the modal screen, let you play the game

})
