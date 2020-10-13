console.log('Hey you')
//New JS file to run the game code.
$ (() => {
    //Keep screen from auto-refresh when button is clicked
    $('button').on('click', (e) => {
        e.preventDefault();
    })
    let $a = $('#a')
    let $b = $('#b')
    let $c = $('#c')
    let $d = $('#d')
    let correctChoice = $a.text()
    const choice = () => {
        $a.on('click', () => {
            if ($a.text() == correctChoice) {
                console.log($a.text() + ' is correct')
            }else {
                console.log($a.text() + ' is incorrect')
            }
        })
        $b.on('click', () => {
            if ($b.text() == correctChoice) {
                console.log($b.text() + ' is correct')
            }else {
                console.log($b.text() + ' is incorrect')
            }
        })
        $c.on('click', () => {
            if ($c.text() == correctChoice) {
                console.log($c.text() + ' is correct')
            }else {
                console.log($c.text() + ' is incorrect')
            }
        })
        $d.on('click', () => {
            if ($d.text() == correctChoice) {
                console.log($d.text() + ' is correct')
            }else {
                console.log($d.text() + ' is incorrect')
            }
        })
    }
    choice()
})