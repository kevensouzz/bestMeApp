const questions = [
    "qual é o seu nome?",
    "o que você aprendeu hoje?",
    "o que você poderia ter feito melhor?",
    "o que você poderia fazer para melhorar?"
]

const ask = (index = 0) => {
    process.stdout.write(`\n${questions[index]} > `)
}

ask()

const answers = []

process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    } else {
        console.log(answers)
        process.exit()
    }
})

process.on("exit", () => {
    console.log(`
    Blz ${answers[0]}!

    Hoje você aprendeu ${answers[1]}

    Você poderia ${answers[2]}

    Você pode ${answers[3]} pra melhorar

    Meus parabéns pelo seu esforço ${answers[0]}, já é uma grande vitória você continuar estudando todos os dias. Espero que você volte amanhã.
    `)
})