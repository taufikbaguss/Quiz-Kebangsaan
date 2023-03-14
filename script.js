const quizData = [
    {
        question: "Siapa nama presiden ketiga Indonesia?",
        a: "Jokowidodo",
        b: "Susilo Bambang Yudhoyono",
        c: "Soekarno",
        d: "BJ Habibie",
        correct: "d",
    },

    {
        question: "Siapa presiden kedua Indonesia?",
        a: "Susilo Bambang Yudhoyono",
        b: "Soekarno",
        c: "BJ Habibie",
        d: "Soeharto",
        correct: "d",
    },

    {
        question: "Siapa presiden pertama Indonesia?",
        a: "Soekarno",
        b: "Megawati Soekarno Putri",
        c: "BJ Habibie",
        d: "Jusuf Kalla",
        correct: "a",
    },

    {
        question: "Apa ibukota Jawa Tengah?",
        a: "Semarang",
        b: "Depok",
        c: "Yogyakarta",
        d: "Surabaya",
        correct: "a",
    },
    
    {
        question: "Apa ibukota Banten?",
        a: "Medan",
        b: "Jakarta",
        c: "Serang",
        d: "Jakarta",
        correct: "c",
    },

    {
        question: "Apa ibukota Jawa Timur?",
        a: "Malang",
        b: "Nganjuk",
        c: "Surabaya",
        d: "Pekalongan",
        correct: "c",
    },

    {
        question: "Apa ibukota Papua?",
        a: "Jayapura",
        b: "Riau",
        c: "Pekanbaru",
        d: "Surabaya",
        correct: "a",
    },

    {
        question: "Jukukan Bogor adalah?",
        a: "Kota Pempek",
        b: "Kota Hujan",
        c: "Kota Pahlawan",
        d: "Kota Bahagia",
        correct: "b",
    },
    
    {
        question: "Kapan Indonesia Merdeka?",
        a: "1925",
        b: "1945",
        c: "1946",
        d: "1999",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>

                <button onclick="location.reload()">Reload</button>
            `
        }
    }
})