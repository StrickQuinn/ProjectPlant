
$ (() => {
    //create function to reset things at the home screen
    const startGame = (e) => {
        $('.modal').hide();
        $('.plant').hide();
        $('.incorrect').hide()
        $('.correct').hide()
        $('#next').hide()
        $('#try').hide()
        $('.plant-name').hide()
        $('#home').hide()
        $('#start').show()
        console.log('hi')
    }
    startGame();
    
    //Test red square clickability
    $('.plant').on('click', () => {
        $('#start').show();
    });

    //When the start button is clicked, bring Welcome screen in front of the container
    $('#start').on('click', () => {
        $(event.currentTarget).hide();
        $('#welcome').show().css({'z-index': 1});
    })

    //When the play button is clicked, hide welcome, and show level1
    $('#play').on('click', () => {
        $('#welcome').hide();
        $('#level1').show();
    })

    //When you click on restart button, return to start screen;
    $('#restart').on('click', () => {
        $('.modal').hide()
        startGame();
    })

    //When you click the close button the modal disappears
    $('#close').on('click', () => {
        $('.modal').hide()
        $('#start').show()
    })

    //When next button is clicked, show plant
    $('#next').on('click', () => {
        $('.modal').hide();
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
        $('.plant').hide()
        $('.plant-name').hide();
        $('#start').show();
        $('#home').hide();
    })

    //When you click on answer A, show correct screen
    $('#a').on('click', () => {
        $('.correct').show()
        $('.answer').hide();
        $('#next').show()
    })

    //When b is clicked show incorrect screen
    $('#b').on('click', () => {
        $('.incorrect').show();
        $('#try').show();
    })

    //When plant is clicked show correct answer//
        $('.plant').on('click', () => {
            $('.plant-name').show()
            $('#start').hide()
            $('#home').show();
    })

})