$(() => {
    $('button').on('click', e => {
        e.preventDefault()
    })
    //when you click the a button, if the text equals correctAnswer text, you are correct;
    //hide choice buttons
    let $a = $('#a').text()
    let $b = $('#b').text()
    let $c = $('#c').text()
    let $d = $('#d').text()
    let $correct = $('.correctAnswer').text()
    let $result = $('.result')
    

    //create a playGame fxn to wrap whether or not the answer is correct
    //when the button is clicked, remove all buttons
    const playerAnswer = () => {
        $('#a').on('click', () => {
            $('.playerChoice').hide()
            if ($a === $correct) {
                $result.text('correct')
            }else {
                $result.text('incorrect')
            }
        });
        $('#b').on('click', () => {
            $('.playerChoice').hide()
            if ($b === $correct) {
                $result.text('correct')
            }else {
                $result.text('incorrect')
            }
        });
        $('#c').on('click', () => {
            $('.playerChoice').hide()
            if ($c === $correct) {
                $result.text('correct')
            }else {
                $result.text('incorrect')
            }
        });
        $('#d').on('click', () => {
            $('.playerChoice').hide()
            if ($d === $correct) {
                console.log('yay')
                $result.text('correct')
            }else {
                $result.text('incorrect')
            }
        })
    }
})