$ (() => {
    //Changed hiding method for modal
    $('.modal').hide();
    //hide plant until game starts
    $('.plant').hide();
    // hide until they are needed
    $('.incorrect').hide()
    $('.correct').hide()
    $('#next').hide()
    $('#try').hide()
    $('.plant-name').hide()
    

    //Test red square clickability
    $('.plant').on('click', () => {
        $('#start').show();
    });

    //When the start button is clicked, hide the start button, and show the welcome
    $('#start').on('click', () => {
        $(event.currentTarget).hide();
        $('#welcome').show();
        $('.container').css({'z-index': -1});
        $('.plant-name').hide();
        $('.plant').hide();
        
    })

    //When the play button is clicked, hide welcome, and show level1
    $('#play').on('click', () => {
        $('#welcome').hide();
        $('#level1').show();
    })

    //When you click on restart button, return to start screen;
    $('#restart').on('click', () => {
        $('.modal').hide()
        $('#start').show();
    })

    //When you click on answer A, show correct screen
    $('#a').on('click', () => {
        $('.correct').show()
        $('.answer').hide();
        $('#next').show()
    })

    //Click on try again and refresh screen with b hidden
    $('#try').on('click', () => {
        $('.incorrect').hide()
        $('#b').hide();
        $('#try').hide();
    })

    //When b is clicked show incorrect screen
    $('#b').on('click', () => {
        $('.incorrect').show();
        $('#try').show();
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

    //When plant is clicked show correct answer//
        $('.plant').on('click', () => {
            $('.plant-name').show()
    })
})