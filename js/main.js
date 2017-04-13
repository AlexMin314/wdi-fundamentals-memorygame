/*
*  Title: Memory Game with General Assembly
*  Author: Alex Min
*  Copyright 2017. General Assembly and Author all right reserved.
*  Versoin: 1.5
*/

let cards = [{
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

let cardInPlay = [];
let gameScore = 0;


function checkForMatch(cardId) {
  document.getElementsByTagName('img')[cardId].setAttribute('src', cards[cardId].cardImage);
  if (cardInPlay.length % 2 === 0) {
    if (cardInPlay[0] === cardInPlay[1]) {
      alert("You found a match! + 1 point!");
      // Score will be added to html page.
      gameScore++;
      let scoreSum = document.getElementById('score').innerHTML = '* Score: ' + gameScore;
    }
    else
      alert("Sorry, try again.");
  }
}

function flipCard() {
  let cardId = this.getAttribute('data-id');
  cardInPlay.push(cards[cardId].rank);
  checkForMatch(cardId);
}

// When the first round started, this will be called by 'onload' of index.htm.
function createBoard() {
  for (let i = 0; i < cards.length; i++) {
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src', "images/back.png");
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    let gameBoard = document.getElementById('game-board').appendChild(cardElement);
  }
}

// This will be invocated when a user push 'reset' button on Nav.
function resetRoundAndSuffle() {
  for (let i = 0; i < cards.length; i++) {
    let gameBoard = document.getElementById('game-board');
    gameBoard.removeChild(gameBoard.firstChild);
  }
  //suffle Array cards randomly and reset Array cardInPlay for next round.
  cards = cards.sort(function() {return 0.5 - Math.random();});
  cardInPlay = [];
  createBoard();
}
