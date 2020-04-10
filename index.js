let userScore = 0
let computerScore = 0
const userScore_span = document.getElementById('userScore')
const computerScore_span = document.getElementById('computerScore')
const scoreBoard_div = document.querySelector('.scoreBoard')
const result_p = document.querySelector('.result > p')
const rock_div = document.getElementById('r')
const paper_div = document.getElementById('p')
const scissors_div = document.getElementById('s')

function getComputerChoice() {
    const choices = ['r', 'p', 's']
    const randomNumber = Math.floor(Math.random() *3)
    return choices[randomNumber]

}

function convert(letter) {
    if (letter === 'r') return "Pedra"
    if (letter === 'p') return "Papel"
    return "Tesoura"
}


function win(user, computer){
    userScore++
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    result_p.innerHTML = `${convert(user)} ganha de ${convert(computer)}. Você ganhou!`
    document.getElementById(user).classList.add('green-glow')
    setTimeout(() => {
        document.getElementById(user).classList.remove('green-glow')
    }, 300);
}

function lose(user, computer){
    computerScore++
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    result_p.innerHTML = `${convert(user)} perde de ${convert(computer)}. Você perdeu!`
    document.getElementById(user).classList.add('red-glow')
    setTimeout(() => {
        document.getElementById(user).classList.remove('red-glow')
    }, 300);
}

function draw(user, computer){
    result_p.innerHTML = `${convert(user)} empata com ${convert(computer)}. Empate!`
    document.getElementById(user).classList.add('grey-glow')
    setTimeout(() => {
        document.getElementById(user).classList.remove('grey-glow')
    }, 300);
}


function game(userChoice){
    const computerChoice = getComputerChoice()
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice)
            break

        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice)
            break
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice)
            break
    }
}



function main() {

    rock_div.addEventListener('click', function(){
        game('r')
    })

    paper_div.addEventListener('click', function(){
        game('p')
    })

    scissors_div.addEventListener('click', function(){
        game('s')
    })
}

main()