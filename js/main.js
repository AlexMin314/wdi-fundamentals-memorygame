var cards = [{
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];

var cardInPlay = [];

function checkForMatch(cardId) {
document.getElementsByTagName('img')[cardId].setAttribute('src', cards[cardId].cardImage);
  if (cardInPlay.length === 2) {
    if (cardInPlay[0] === cardInPlay[1])
      alert("You found a match!");
    else
      alert("Sorry, try again.");
  }
}

function flipCard() {
  var cardId = this.getAttribute('data-id');
  cardInPlay.push(cards[cardId].rank);
  checkForMatch(cardId);
}

function createBoard() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', "images/back.png");
    cardElement.setAttribute('data-id', i);
    //data- attributes are meant to store data about an element
    //that is not tied to a style.
    cardElement.addEventListener('click', flipCard);
    var gameBoard = document.getElementById('game-board');
    gameBoard.appendChild(cardElement);
  }
}

createBoard();
