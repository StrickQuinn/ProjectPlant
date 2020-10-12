$ (() => {
    //Changed hiding method for modal
    $('.modal').hide();

    //hide plant until game starts
    $('.plant').hide();

    //Test red square clickability
    $('.plant').on('click', () => {
        alert('plant');
    });

    //When the start button is clicked, hide the start button &show the modal class
    $('#start').on('click', () => {
        $(event.currentTarget).hide()
        $('.modal').show();
        $('.container').css({'z-index': -1});
    })

    //When the close button is clicked, make the modal disappear
    $('#close').on('click', () => {
        $('.modal').hide();
        //show plant when close is clicked
        $('.plant').show();
    })
})