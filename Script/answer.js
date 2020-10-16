$(() => {
    $('button').on('click', e => {
        e.preventDefault()
    })

    //when you click the X button, hide modal and show wallet container and level container
    $('#play').on('click', () => {
        $('.wallet-container').show()
        $('.modal').hide()
        $('.level-container').show()
        playGame()
    })

    //have a way to create the different levels
    class Level {
        constructor(number, question, answerA, answerB, answerC,  answerD, correctAnswer, result, plantName, plantImage){
            this.number = number,
            this.question = question,
            this.answerA = answerA,
            this.answerB = answerB,
            this.answerC = answerC,
            this.answerD = answerD,
            this.correctAnswer = correctAnswer,
            this.result = result,
            this.plantName = plantName,
            this.plantImage = plantImage
        }
    }
    const totalLevels = [
        new Level(
            1,
            'In <i>Game of Thrones</i>, Daenerys is known as the queen of these.',
            'dragons',
            'warthogs',
            'direwolves',
            'bears',
            'dragons',
            '',
            'Madagascar Dragon Tree <br /><i>Dracaena marginata</i>',
            'https://i.imgur.com/Qq49gve.jpg'
        ),
        new Level(
            2,
            'What kind of necklace does Lisa Simpson wear?',
            'diamonds',
            'jade',
            'pearls',
            'turqouise',
            'pearls',
            '',
            'String of Pearls<br /><i>Senecio rowleyanus</i>',
            'https://i.imgur.com/XthF9vs.jpg?1'
        ),
        new Level(
            3,
            'In <i>Rugrats</i>, What is Tommy\'s last name?',
            'Potatoes',
            'Mayonnaise',
            'Pickles',
            'Peters',
            'Pickles',
            '',
            'Pickle Cactus<br /><i>Senecio Stapeliiformis</i>',
            'https://i.imgur.com/7t2irvv.jpg'
        ),
        new Level(
            4,
            'Who is one of Shrek\'s best friends?',
            'Donkey',
            'Cow',
            'Chicken',
            'Pig',
            'Donkey',
            '',
            'Donkey\'s Tail<br /><i>Sedum morganianum</i>',
            'https://i.imgur.com/9e5WY70.jpg'
        ),
        new Level(
            5,
            'In <i>Harry Potter</i>, what creature is Ron afraid of?',
            'alligator',
            'spider',
            'snake',
            'horse',
            'spider',
            '',
            'Spider Plant<br /><i>Chlorophytum comosum</i>',
            'https://i.imgur.com/0ejzBgb.jpg'
        )
    ]

    //Create a way to play the game
    const playGame = () => {
        playerSelection();
        
    }

    //determine player's answer
    const playerSelection = () => {
        let $a = $('#a').text()
        let $b = $('#b').text()
        let $c = $('#c').text()
        let $d = $('#d').text()

        if ($('#a').on('click', () => {
            playerAnswer = $a
            console.log(playerAnswer)
        }));
        if ($('#b').on('click', () => {
            playerAnswer = $b
            console.log(playerAnswer)
        }));
        if ($('#c').on('click', () => {
            playerAnswer = $a
            console.log(playerAnswer)
        }));
        if ($('#d').on('click', () => {
            playerAnswer = $d
            console.log(playerAnswer)
        }));
    }
    
})