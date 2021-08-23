let dealerCardArray = [];
let cardArray = []
let hasBlackjack = false;
let isAlive = false;
let message = '';
let sum = 0

let messageEl = document.getElementById('message-el');
// let sumEl = document.getElementById('sum');
let sumEl = document.querySelector('#sum');
let cardEl = document.getElementById('cards');
let startGameBtn = document.getElementById('start-game');
let addMoreBtn = document.getElementById('add-more');
let stopBtn = document.getElementById('stop-btn');

let dealerSum = 0;
let isDealerAlive = false;
let dealerCards = document.getElementById('dealer-cards');
let dealerSumElement = document.getElementById('dealer-sum');

let player = {
    name: 'Tarik',
    chips: 100
}


function getRandomCard()
{
    let randomNumber = Math.floor(Math.random() * 13 ) + 1
    if (randomNumber === 1)
    {
        return 11
    }else if (randomNumber === 11 || randomNumber === 12 || randomNumber === 13)
    {
        return 10;
    }else{
        return randomNumber
    }
}


function renderGame() {

    cardEl.textContent = "Cards: "
    sumEl.textContent = "Sum: " + sum;

    dealerCards.textContent = "Dealer cards: "
    dealerSumElement.textContent = "Dealer sum: " + dealerSum;

    for(let i = 0; i < cardArray.length; i ++)
    {
        cardEl.textContent += cardArray[i] + " "
    }

    if (sum <= 20) {
        message = "Do you want to draw more?"
    } else

        if (sum === 21) {
            message = "You have a Blackjack!"
            hasBlackjack = true;
        } else {
            message = "You are Bust"
            isAlive = false;
        }

        messageEl.textContent = message;
        startGameBtn.classList.add("d-none")
        addMoreBtn.classList.remove("d-none")
        stopBtn.classList.remove("d-none");
    

}

function startGame() 
{
    isAlive = true;
    isDealerAlive = true;

    let firstCard = getRandomCard();
    let secondCard = getRandomCard();

    let firstDealerCard = getRandomCard();
    let secondDealerCard = getRandomCard();
    
    dealerCardArray = [firstDealerCard,secondDealerCard];
    cardArray = [firstCard, secondCard]

    dealerSum = firstDealerCard + secondDealerCard;

    if (dealerSum >= 16)
    {
        isDealerAlive = false;
    }else if (dealerSum < 16)
    {
        isDealerAlive = true;
    }

    sum = cardArray[0] + cardArray[1];
    renderGame();
}

function addMoreCards() {

    if (isAlive===true && !hasBlackjack) 
    {
        let newCard = getRandomCard();

        // if(isDealerAlive === true)
        // {
        //   let newDealerCard = getRandomCard();  
        //   dealerSum += newDealerCard; 
        //   dealerCardArray.push(newDealerCard);
        // }

        console.log(isDealerAlive)
        
        sum += newCard;
        cardArray.push(newCard);
        
        renderGame();
    
    }else
    {
        addMoreBtn.classList.add('disabled');
    }

}

function dealer()
{
    let firstDealerCard = getRandomCard();
    let secondDealerCard = getRandomCard();
}


function randomNum()
{
    return Math.floor(Math.random() * 13 ) + 1
    
}





