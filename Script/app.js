$ (() => {
    //Changed hiding method for modal
    $('.modal').hide();

    //Test start button clickability
    $('#start').on('click', () => {
        alert('start');
    });

    //Test red square clickability
    $('.plant').on('click', () => {
        alert('plant');
    });

    //Test close button clickability
    $('#close').on('click', () => {
        alert('close');
    })

})