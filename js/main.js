/*
 *  Title: Memory Game with General Assembly
 *  Author: Alex Min
 *  Copyright 2017. General Assembly and Author all right reserved.
 *  Versoin: 1.5
 */

(function cardGame() {
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

  var cardInPlay = [],
      gameScore = 0;

  // Adding an event to the reset button
  document.getElementById('reset').addEventListener('click', resetRoundAndSuffle);


  function checkForMatch(cardId) {
    var scoreSum;
    document.getElementsByTagName('img')[cardId].setAttribute('src', cards[cardId].cardImage);
    if (cardInPlay.length % 2 === 0) {
      if (cardInPlay[0] === cardInPlay[1]) {
        alert("You found a match! + 1 point!");
        // Score will be added to html page.
        gameScore++;
        scoreSum = document.getElementById('score').innerHTML = '* Score: ' + gameScore;
      } else
        alert("Sorry, try again.");
    }
  }

  function flipCard() {
    var cardId = this.getAttribute('data-id');
    cardInPlay.push(cards[cardId].rank);
    checkForMatch(cardId);
  }

  // When the first round started, this will be invoked by IIFE.
  function createBoard() {
    var i, cardElement, gameBoard;
    for (i = 0; i < cards.length; i++) {
      cardElement = document.createElement('img');
      cardElement.setAttribute('src', "images/back.png");
      // using data-*
      cardElement.setAttribute('data-id', i);
      cardElement.addEventListener('click', flipCard);
      gameBoard = document.getElementById('game-board').appendChild(cardElement);
    }
  }

  // This will be invoked when a user push the 'reset' button on the <nav>.
  function resetRoundAndSuffle() {
    var i, gameBoard;
    for (i = 0; i < cards.length; i++) {
      gameBoard = document.getElementById('game-board');
      gameBoard.removeChild(gameBoard.firstChild);
    }
    //suffling the cards array randomly and reset that for next round.
    cards = cards.sort(function() {
      return 0.5 - Math.random();
    });

    cardInPlay = [];
    createBoard();
  }

// game start
createBoard();
}());
