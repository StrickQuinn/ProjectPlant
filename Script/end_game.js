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