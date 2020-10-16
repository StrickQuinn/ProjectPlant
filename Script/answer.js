$(() => {
    $('button').on('click', e => {
        e.preventDefault()
    })

     //when you click the play button, show the level container
    
    $('#play').on('click', () => {
        $('.wallet-container').show()
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
    
        if ($('#a').on('click', () => {
            console.log($a)
            $('.playerChoice').hide()
            $('.continue').show()
            if ($a === $correct) {
                $result.text('That is correct!')
                totalDollars()
            }else {
                $result.text('That is incorrect. The correct answer is ' + $correct + '.')
            }
            $('.result').show()

        }));
        if ($('#b').on('click', () => {
            console.log($b)
            $('.continue').show()
            $('.playerChoice').hide()
            if ($b === $correct) {
                $result.text('That is correct!')
                totalDollars()
            }else {
                $result.text('That is incorrect. The correct answer is ' + $correct + '.')
            }
            $('.result').show()
        }));
        
        if ($('#c').on('click', () => {
            console.log($c)
            $('.continue').show()
            $('.playerChoice').hide()
            if ($c === $correct) {
                $result.text('That is correct!')
                totalDollars()
            }else {
                $result.text('That is incorrect. The correct answer is ' + $correct + '.')
            }
            $('.result').show()
        }));
        if ($('#d').on('click', () => {
            console.log($d)
            $('.continue').show()
            $('.playerChoice').hide()
            if ($d === $correct) {
                $result.text('That is correct!')
                totalDollars()
            }else {
                $result.text('That is incorrect. The correct answer is ' + $correct + '.')
            }
            $('.result').show()
        }));
    }

    //create a way to find the current level
    //create a way to change the level based on current level
const changeLevel = () => {
    const $currentLevel = $('.level').attr('id', '0').text()
    console.log($currentLevel)
    //Game of Thrones series by Georgie R. R. Martin
    if ($currentLevel == 'Example') {
        console.log('change1')
        $('.round-number').text('1')
        $('.level').text('One')
        $('.question').html('In <i>Game of Thrones</i>, Daenerys is known as the queen of these.')
        $('#a').text('dragons')
        $('#b').text('warthogs')
        $('#c').text('direwolves')
        $('#d').text('bears')
        $('.correctAnswer').text('dragons')
        $('.plant-name').html('Madagascar Dragon Tree <br /><i>Dracaena marginata</i>')
        $('img').attr('src', 'https://i.imgur.com/Qq49gve.jpg')
    //The Simpsons by Matt Groening
    }else if ($currentLevel == 'One') {
        console.log('change 2')
        $('.round-number').text('2')
        $('.level').text('Two')
        $('.question').text('What kind of necklace does Lisa Simpson wear?')
        $('#a').text('diamonds')
        $('#b').text('jade')
        $('#c').text('pearls')
        $('#d').text('turqouise')
        $('.correctAnswer').text('pearls')
        $('.plant-name').html('String of Pearls<br /><i>Senecio rowleyanus</i>')
        $('img').attr('src', 'https://i.imgur.com/XthF9vs.jpg?1')
    //Rugrats by Arlene Klasky and Gabor Csupo
    }else if ($currentLevel == 'Two') {
        console.log('change 3')
        $('.round-number').text('3')
        $('.level').text('Three')
        $('.question').html('In <i>Rugrats</i>, What is Tommy\'s last name?')
        $('#a').text('Potatoes')
        $('#b').text('Pickles')
        $('#c').text('Mayonnaise')
        $('#d').text('Peters')
        $('.correctAnswer').text('Pickles')
        $('.plant-name').html('Pickle Cactus<br /><i>Senecio Stapeliiformis</i>')
        $('img').attr('src', 'https://i.imgur.com/7t2irvv.jpg')
    
    }else if ($currentLevel == 'Three') {
        $('.end-container').show()
        $('.level-container').hide()
        winGame()
        //run end of game
    }

}


//In order to with the game, the total amount in the wallet must be >= 15
const winGame = () => {
    if ($('.wallet-total').html('') >=15) {
        $('.game-result').html('Woohoo! I can trust you with my plants!')
    }else {
        $('.game-result').html('Looks like you still have some learning to do')
    }
}


    //When you click the next button, change the text of the level-container
    $('.next').on('click', () => {
        changeLevel()
        $('.playerChoice').show()
        console.log('next btn')
        nextButton()
        $('.next').hide()
    })

    const nextButton = () => {
        playerAnswer()
        $('img').hide()
        $('.plant-name').hide()
        }


     ///***Here + buttons are where there are problems with counting   
    //Create a way to keep track of how much money you have    
    let score = 0
    const totalDollars = () => {
        const $walletTotal = $('.wallet-total')
        console.log(score)
            score += 5
            $walletTotal.html(score)
    }
    
})
