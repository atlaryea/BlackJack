let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard] //array
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard () {
    
    let randomNumber = Math.floor( Math.random() * 13 ) + 1
    return randomNumber
    
}

function startGame() {
    runGame()
}

//store the message-el paragraph in a variable 
function runGame() {

    cardsEl.textContent = "Cards: "
    for (let i=0; i<cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum < 21){
        message = "Do you want to draw a new card?"
    } else if (sum === 21){
        message = "You've got Blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {

    let card = getRandomCard()

    sum += card

    cards.push(card)

    runGame()
}
