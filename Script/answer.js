$(() => {
    $('button').on('click', e => {
        e.preventDefault()
    })

     //when you click the play button, show the level container
    let $div = $('<div>').addClass('level').attr('id', '0')
    $('#play').on('click', () => {
        $('.modal').hide()
        $('.level-container').show()
        playerAnswer();
    })

    //when you click the a button, if the text equals correctAnswer text, you are correct;
    //hide choice buttons
    //create a playGame fxn to wrap whether or not the answer is correct
    //when the button is clicked, remove all buttons
    const playerAnswer = () => {
        let $a = $('#a').text()
        let $b = $('#b').text()
        let $c = $('#c').text()
        let $d = $('#d').text()
        let $correct = $('.correctAnswer').text()
        let $result = $('.result')
        $('#a').on('click', () => {
            console.log($a)
            $('.playerChoice').hide()
            $('.continue').show()
            if ($a === $correct) {
                $result.text('correct')
            }else {
                $result.text('incorrect')
            }
            $('.result').show()
        });
        $('#b').on('click', () => {
            console.log($b)
            $('.continue').show()
            $('.playerChoice').hide()
            if ($b === $correct) {
                $result.text('correct')
            }else {
                $result.text('incorrect')
            }
            $('.result').show()
        });
        $('#c').on('click', () => {
            console.log($c)
            $('.continue').show()
            $('.playerChoice').hide()
            if ($c === $correct) {
                $result.text('correct')
            }else {
                $result.text('incorrect')
            }
            $('.result').show()
        });
        $('#d').on('click', () => {
            console.log($d)
            $('.continue').show()
            $('.playerChoice').hide()
            if ($d === $correct) {
                console.log('yay')
                $result.text('correct')
            }else {
                $result.text('incorrect')
            }
            $('.result').show()
        })
    }




    $('.continue').on('click', () => {
        $('.plant-name').show()
        $('img').show()
        $('.continue').hide()
        $('.next').show()
        $('.result').hide()
    })

    $('.next').on('click', () => {
        $('.playerChoice').show()
        $('.level').attr('id', '1').text('Question 1')
        $('.question').text('In Game of Thrones, Daenerys is known as the queen of these.')
        $('#a').text('dragons')
        $('#b').text('warthogs')
        $('#c').text('direwolves')
        $('#d').text('bears')
        $('.correctAnswer').text('dragons')
        console.log('next btn')
        nextButton()
        $('.next').hide()
    })
    
    //When you click the next button, change the text of the level-container
    //Game of Thrones series by Georgie R. R. Martin
    const nextButton = () => {
    playerAnswer()
    $('img').hide()
    $('.plant-name').hide()
    }

    
})