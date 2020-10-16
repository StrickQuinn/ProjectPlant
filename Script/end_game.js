$(() => {
    
// //when you click the a button, if the text equals correctAnswer text, you are correct;
//     //hide choice buttons
//     //create a playGame fxn to wrap whether or not the answer is correct
//     //when the button is clicked, remove all buttons
//     let score = 0
//     const playerAnswer = () => {
//         let $a = $('#a').text()
//         let $b = $('#b').text()
//         let $c = $('#c').text()
//         let $d = $('#d').text()
//         let $correct = $('.correctAnswer').text()
//         let $result = $('.result')
//         const $walletTotal = $('.wallet-total')
    
//         $('#a').on('click', () => {
//             console.log($a)
//             $('.playerChoice').hide()
//             $('.continue').show()
//             if ($a === $correct) {
//                 $result.text('That is correct!')
//                 score + 1
//                 $walletTotal.text(score)
//             }else {
//                 $result.text('That is incorrect. The correct answer is ' + $correct + '.')
//             }
//             $('.result').show()

//         });
//         $('#b').on('click', () => {
//             console.log($b)
//             $('.continue').show()
//             $('.playerChoice').hide()
//             if ($b === $correct) {
//                 $result.text('That is correct!')
//                 newScore = score + 1
//                 $walletTotal.text(newScore)
//             }else {
//                 $result.text('That is incorrect. The correct answer is ' + $correct + '.')
//             }
//             $('.result').show()
//         });
        
//         $('#c').on('click', () => {
//             console.log($c)
//             $('.continue').show()
//             $('.playerChoice').hide()
//             if ($c === $correct) {
//                 $result.text('That is correct!')
//                 newScore = score + 1
//                 $walletTotal.text(newScore)
//             }else {
//                 $result.text('That is incorrect. The correct answer is ' + $correct + '.')
//             }
//             $('.result').show()
//         });
//         $('#d').on('click', () => {
//             console.log($d)
//             $('.continue').show()
//             $('.playerChoice').hide()
//             if ($d === $correct) {
//                 $result.text('That is correct!')
//                 newScore = score + 1
//                 $walletTotal.text(newScore)
//             }else {
//                 $result.text('That is incorrect. The correct answer is ' + $correct + '.')
//             }
//             $('.result').show()
//         })
//     }

//     //create a way to find the current level
//     //create a way to change the level based on current level
// const changeLevel = () => {
//     const $currentLevel = $('.level').attr('id', '0').text()
//     console.log($currentLevel)
//     //Game of Thrones series by Georgie R. R. Martin
//     if ($currentLevel == 'Example') {
//         console.log('change1')
//         $('.round-number').text('1')
//         $('.level').text('One')
//         $('.question').html('In <i>Game of Thrones</i>, Daenerys is known as the queen of these.')
//         $('#a').text('dragons')
//         $('#b').text('warthogs')
//         $('#c').text('direwolves')
//         $('#d').text('bears')
//         $('.correctAnswer').text('dragons')
//         $('.plant-name').html('Madagascar Dragon Tree <br /><i>Dracaena marginata</i>')
//         $('img').attr('src', 'https://i.imgur.com/Qq49gve.jpg')
//     //The Simpsons by Matt Groening
//     }else if ($currentLevel == 'One') {
//         console.log('change 2')
//         $('.round-number').text('2')
//         $('.level').text('Two')
//         $('.question').text('What kind of necklace does Lisa Simpson wear?')
//         $('#a').text('diamonds')
//         $('#b').text('jade')
//         $('#c').text('pearls')
//         $('#d').text('turqouise')
//         $('.correctAnswer').text('pearls')
//         $('.plant-name').html('String of Pearls<br /><i>Senecio rowleyanus</i>')
//         $('img').attr('src', 'https://i.imgur.com/XthF9vs.jpg?1')
//     //Rugrats by Arlene Klasky and Gabor Csupo
//     }else if ($currentLevel == 'Two') {
//         console.log('change 3')
//         $('.round-number').text('3')
//         $('.level').text('Three')
//         $('.question').html('In <i>Rugrats</i>, What is Tommy\'s last name?')
//         $('#a').text('Potatoes')
//         $('#b').text('Mayonnaise')
//         $('#c').text('Pickles')
//         $('#d').text('Peters')
//         $('.correctAnswer').text('Pickles')
//         $('.plant-name').html('Pickle Cactus<br /><i>Senecio Stapeliiformis</i>')
//         $('img').attr('src', 'https://i.imgur.com/7t2irvv.jpg')
//     //Shrek! by William Steig
//     }else if ($currentLevel == 'Three') {
//         console.log('change 4')
//         $('.round-number').text('4')
//         $('.level').text('Four')
//         $('.question').html('Who is one of Shrek\'s best friends?')
//         $('#a').text('Donkey')
//         $('#b').text('Cow')
//         $('#c').text('Chicken')
//         $('#d').text('Pig')
//         $('.correctAnswer').text('Donkey')
//         $('.plant-name').html('Donkey\'s Tail<br /><i>Sedum morganianum</i>')
//         $('img').attr('src', 'https://i.imgur.com/9e5WY70.jpg')
//     //Harry Potter series  but J. K. Rowling
//     }else if ($currentLevel == 'Four') {
//         console.log('change 5')
//         $('.round-number').text('5')
//         $('.level').text('Five')
//         $('.question').html('In <i>Harry Potter</i>, what creature is Ron afraid of?')
//         $('#a').text('alligator')
//         $('#b').text('spider')
//         $('#c').text('snake')
//         $('#d').text('horse')
//         $('.correctAnswer').text('spider')
//         $('.plant-name').html('Spider Plant<br /><i>Chlorophytum comosum</i>')
//         $('img').attr('src', 'https://i.imgur.com/0ejzBgb.jpg')
//     }else {
//         $('.level-container').hide()
//         //run end of game
//     }

// }

//     $('.next').on('click', () => {
//         changeLevel()
//         $('.playerChoice').show()
//         console.log('next btn')
//         nextButton()
//         $('.next').hide()
//     })
//     //When you click the next button, change the text of the level-container
//     //Game of Thrones series by Georgie R. R. Martin
//     const nextButton = () => {
//         playerAnswer()
//         $('img').hide()
//         $('.plant-name').hide()
//         }


    
// })

})