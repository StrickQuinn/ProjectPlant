$ (() => {

    //Test start button clickability
    $('#start').on('click', () => {
        alert('start');
    });

    //Test red square clickability
    $('.plant').on('click', () => {
        alert('plant')
    });
})