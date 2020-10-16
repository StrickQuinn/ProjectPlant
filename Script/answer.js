$(() => {
    $('button').on('click', e => {
        e.preventDefault()
    })

    //when you click the X button, hide modal and show wallet container and level container
    $('#play').on('click', () => {
        $('.wallet-container').show()
        $('.modal').hide()
        $('.level-container').show()
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
    const levels = []
    
})