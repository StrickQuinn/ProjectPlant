$ (() => {
    //Changed hiding method for modal
    $('.modal').hide();

    //Test red square clickability
    $('.plant').on('click', () => {
        alert('plant');
    });

    //Test close button clickability
    // $('#close').on('click', () => {
    //     alert('close');
    // })

    //When the start button is clicked, hide the start button &show the modal class
    $('#start').on('click', () => {
        $(event.currentTarget).hide()
        $('.modal').show();
    })

    //When the close button is clicked, make the modal disappear
    $('#close').on('click', () => {
        $('.modal').hide();
    })
})