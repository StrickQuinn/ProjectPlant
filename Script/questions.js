$( () => {
    $('button').on('click', e => {
        e.preventDefault()
    })

    //create a way to find the current level
    const $currentLevel = $('.level').attr('id', '0').text()
    console.log($currentLevel)

    // const levelNum = () => {
        
    // }

})