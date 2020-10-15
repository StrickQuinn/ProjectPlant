$(() => {
    $('button').on('click', e => {
        e.preventDefault()
    })

     //when you click the play button, show the level container
    
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

    //create a way to find the current level
    //create a way to change the level based on current level
const changeLevel = () => {
    const $currentLevel = $('.level').attr('id', '0').text()
    console.log($currentLevel)
    if ($currentLevel == 'Example') {
        console.log('change1')
        $('.level').attr('id', '1').text('One')
    $('.question').text('In Game of Thrones, Daenerys is known as the queen of these.')
    $('#a').text('dragons')
    $('#b').text('warthogs')
    $('#c').text('direwolves')
    $('#d').text('bears')
    $('.correctAnswer').text('dragons')
    $('.plant-name').html('Madagascar Dragon Tree <i>Dracaena marginata</i>')
    $('img').attr('src', 'https://i.imgur.com/Fa87k4G.jpg?1')
    }else if ($currentLevel == 'One') {
    console.log('change 2')
    $('.level').attr('id', '1').text('Two')
    $('.question').text('What kind of necklace does Lisa Simpson wear?')
    $('#a').text('diamonds')
    $('#b').text('jade')
    $('#c').text('pearls')
    $('#d').text('turqouise')
    $('.correctAnswer').text('pearls')
    $('.plant-name').html('String of Pearls <i>Senecio rowleyanus</i>')
    $('img').attr('src', 'https://i.imgur.com/XthF9vs.jpg?1')
    }
}







    $('.next').on('click', () => {
        changeLevel()
        $('.playerChoice').show()
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