let firstCard = 10
let secondCard = 10
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ""
let messageEl = document.getElementsByClassName("message-el")
console.log(messageEl)

//store the message-el paragraph in a variable 
function startGame(){
    if (sum < 21){
        message = "Do you want to draw a new card?"
    } else if (sum === 21){
        message = "You've got Blackjack!"
        hasBlackjack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
}
console.log(message)

//Display the message
messageEl.textContent = message

//cash out