const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById
('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    }) 
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide') 
    }
}


function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Choose the correct option',
        answers: [
            { text: 'apple', correct: true },
            { text: 'aple', correct: false },
            { text: 'appul', correct: false },
            { text: 'apul', correct: false }
        ]
    },
    {
        question: 'Do you speak English?',
        answers: [
            { text: 'Yes, we do', correct: false },
            { text: 'Yes, I do', correct: true },
            { text: 'Yes, they do', correct: false },
            { text: 'No, I do', correct: false }
        ]
    },
    {
        question: 'Choose the correct option',
        answers: [
            { text: 'Where are you from?', correct: true },
            { text: 'What from are you?', correct: false },
            { text: 'Where from are you?', correct: false },
            { text: 'What are you from?', correct: false }
        ]
    },
    {
        question: 'Choose the odd one?',
        answers: [
            { text: 'dog', correct: false },
            { text: 'cat', correct: false },
            { text: 'monkey', correct: false },
            { text: 'tree', correct: true }
        ]
    },
    {
        question: 'Choose the correct option',
        answers: [
            { text: 'He live on London', correct: false },
            { text: 'He lives on London', correct: false },
            { text: 'He lives in London', correct: true },
            { text: 'He live in London', correct: false }
        ]
    },
    {
        question: 'Choose the correct option',
        answers: [
            { text: 'Yui has a big very car', correct: false },
            { text: 'Yui car has a very big', correct: false },
            { text: 'Yui has a very big car', correct: true },
            { text: 'Yui has a car very big', correct: false }
        ]
    },
    {
        question: 'Your fathers brother is your?',
        answers: [
            { text: 'Aunt', correct: false },
            { text: 'Uncle', correct: true },
            { text: 'Nephew', correct: false },
            { text: 'Cousin', correct: false }
        ]
    },
    {
        question: 'Your brothers daughter is your?',
        answers: [
            { text: 'uncle', correct: false },
            { text: 'nephew', correct: false },
            { text: 'cousin', correct: false },
            { text: 'niece', correct: true }
        ]
    },
    {
        question: 'What colors are in the national flag of Japan?',
        answers: [
            { text: 'blue and white', correct: false },
            { text: 'white and red', correct: true },
            { text: 'blue and red', correct: false },
            { text: 'purple and orange', correct: false }
        ]
    }
]
