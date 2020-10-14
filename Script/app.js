

$ ((e) => {
    //Keep screen from auto-refresh when button is clicked
    $('button').on('click', (e) => {
        e.preventDefault();
    })
    //create function to reset things at the home screen
    const startGame = () => {
        $('#start').show()
        $('.modal').hide();
        $('.plant').hide();
        $('#next').hide()
        $('#try').hide()
        $('.plant-name').hide()
        $('#home').hide()
        $('#start').show()
        $('.level').hide()
        console.log('hi')
    }
    startGame();

    const goHome = () => {
        $('.plant').hide()
        $('.plant-name').hide();
        $('#start').show();
        $('#home').hide();
        $('.answer').hide();
        console.log('went home')
    }
    
    //Picture of Gecky Le Gecko
    $('.plant').on('click', () => {
        $('#start').show();
    });
    //When the start button is clicked, bring Welcome screen in front of the container
    $('#start').on('click', () => {
        $('#start').hide();
        $('#welcome').show()
        console.log('start')
    })
    //When the play button is clicked, hide welcome, and show level1
    $('#play').on('click', () => {
        $('#welcome').hide();
        $('#example').show();
<<<<<<< HEAD
        //$('.level').show();
        $('#next').show();
        $('.answer').show();
=======
        $('#next').show()
>>>>>>> tmp
        console.log('play');
    })

    //When you click on restart button, return to start screen;
    $('#restart').on('click', () => {
        $('.level').hide();
        goHome();
        startGame();
        console.log('hit restart button')
    })

    //When you click the close button the modal disappears
    $('#close').on('click', () => {
        $('.modal').hide()
        $('#start').show()
        console.log('close')
    })



<<<<<<< HEAD

    const rounds = []
    //When next button is clicked, show plant
    $('#next').on('click', () => {
        $('#example').hide();
        $('#one').show()
        //$('.plant').show();
        console.log('next scene')
=======
    let currentLevel = 0
    //When next button is clicked, show 
    $('#next').on('click', () => {
        currentLevel++
        $(`#${currentLevel}`).show()
        $(`#${currentLevel}` - 1).hide()
        console.log('next button')
>>>>>>> tmp
    })






<<<<<<< HEAD



=======
>>>>>>> tmp
    //Click on try again and refresh screen with b hidden
    $('#try').on('click', () => {
        $('#b').hide();
        $('#try').hide();
        console.log('try again')
    })

    //When home is clicked, take back to start screen
    $('#home').on('click', () => {
        goHome();
        console.log('bye')
    })
    //When plant is clicked show correct answer//
        $('.plant').on('click', () => {
            $('.plant-name').show()
            $('#start').hide()
            $('#home').show();
            console.log('plant')
    })
})
