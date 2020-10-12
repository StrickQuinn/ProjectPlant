$ ((e) => {
    //create function to reset things at the home screen
    const startGame = (e) => {
        $('#start').show()
        $('.modal').hide();
        $('.plant').hide();
        $('.incorrect').hide()
        $('.correct').hide()
        $('#next').hide()
        $('#try').hide()
        $('.plant-name').hide()
        $('#home').hide()
        $('#start').show()
        $('.level').hide()
        $('.answers').show();
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
    

    //Keep screen from auto-refresh when button is clicked
    $('button').on('click', (e) => {
        e.preventDefault();
    })

    //Test red square clickability
    $('.plant').on('click', () => {
        $('#start').show();
    });

    //When the start button is clicked, bring Welcome screen in front of the container
    $('#start').on('click', () => {
        $('#start').hide();
        $('#welcome').show().css({'z-index': 1});
        console.log('start')
    })

    //When the play button is clicked, hide welcome, and show level1
    $('#play').on('click', () => {
        $('#welcome').hide();
        $('.level').show();
        $('.answer').show();
        console.log('play');
    })

    //When you click on restart button, return to start screen;
    $('#restart').on('click', () => {
        $('.level').hide();
        goHome();
    })

    // //When you click the close button the modal disappears
    // $('#close').on('click', () => {
    //     $('.modal').hide()
    //     $('#start').show()
    //     console.log('close')
    // })

    //When next button is clicked, show plant
    $('#next').on('click', () => {
        $('.level').hide();
        $('.plant').show();
    })

    //Click on try again and refresh screen with b hidden
    $('#try').on('click', () => {
        $('.incorrect').hide()
        $('#b').hide();
        $('#try').hide();
    })

    //When home is clicked, take back to start screen
    $('#home').on('click', () => {
        $('.incorrect').hide()
        $('.correct').hide()
        goHome();
    })

    //When you click on answer A, show correct screen
    $('#a').on('click', () => {
        $('.correct').show()
        $('.answer').hide();
        $('#next').show()
    })

    //When b is clicked show incorrect screen
    // $('#b').on('click', () => {
    //     $('.incorrect').show();
    //     $('#try').show();
    // })

    //When plant is clicked show correct answer//
        $('.plant').on('click', () => {
            $('.plant-name').show()
            $('#start').hide()
            $('#home').show();
    })
})
