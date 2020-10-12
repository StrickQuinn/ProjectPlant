$ (() => {

    //Test start button clickability
    $('#start').on('click', () => {
        alert('start');
    });

    //Test req square clickability
    $('.plant').on('click', () => {
        alert('plant')
    });
})