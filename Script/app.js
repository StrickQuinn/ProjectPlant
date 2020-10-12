$ (() => {
    //Changed hiding method for modal
    $('.modal').hide();

    //hide plant until game starts
    $('.plant').hide();

    //Test red square clickability
    $('.plant').on('click', () => {
        alert('plant');
    });

    //When the start button is clicked, hide the start button, and show the welcome
    $('#start').on('click', () => {
        $(event.currentTarget).hide();
        $('#welcome').show();
        $('.container').css({'z-index': -1});
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
})