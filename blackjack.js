function getRandom(){
    return Math.floor(Math.random()*11 + 1)
}

// variable
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.getElementById("card-el")

let player = {
    name: "John Doe",
    chip: "145"
}

// setting the player name and bet amount
const playerEl = document.getElementById('player');
playerEl.textContent = player.name + ": $" + player.chip

// starting the game
function startGame() {
    isAlive = true
    let firstCard = getRandom()
    let secondCard = getRandom()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

// check it there is a winner
function renderGame() {
    cardEl.textContent = "Cards: " 
    for (let i=0; i<cards.length; i+=1) {
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Congratulations! You won!"
        hasBlackjack=true
    } else if (sum>21) {
        message = "You are out of the game"
        isAlive = false
    }
    messageEl.textContent = message
}

// get new card
function newCard() {
    if(hasBlackjack===false && isAlive ===true) {
        let card = getRandom()
        sum += card
        cards.push(card)
        renderGame()
    }
}

