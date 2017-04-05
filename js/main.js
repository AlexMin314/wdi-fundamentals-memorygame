var cards = ["queen", "queen", "king", "king"];
var cardInPlay = [];

function checkForMatch() {
    if (cardInPlay.length === 2) {
        if (cardInPlay[0] === cardInPlay[1])
            alert("You found a match!");
        else
            alert("Sorry, try again.");
        }
}

function flipCard(cardId) {
    console.log("User flipped " + cards[cardId]);
    cardInPlay.push(cards[cardId]);
    checkForMatch();
}

flipCard(0);
flipCard(2);
