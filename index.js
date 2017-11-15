const game = document.getElementById("game");
const gameDeck = [];
let howManyRows = 2;
// const shuffledArray = shuffleArray(gameDeck);
let data;
let currentFlipped = 0;

document.addEventListener("DOMContentLoaded", () => {
  //set on click event when they say how many rows they want/reset game?
  makeBoardOfXRows(howManyRows); //move outside, give option to set how many rows? (how difficult)

  fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(json => console.log(json));
  fetch("http://localhost:3000/cards")
    .then(res => res.json())
    .then(json => {
      generateCards(json);
    });
});

function generateCards(json) {
  for (let i = 0; i < howManyRows * 4; i++) {
    addCardToDeck(json);
  }
  collectCards(json);
}

//modern version of fischer-yates shuffle algorithm
function shuffleArray(array) {
  var j, x, i;
  for (i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = array[i];
    array[i] = array[j];
    array[j] = x;
  }
  return array;
}

function addCardToDeck(json) {
  gameDeck.push({ id: json.id, image: json.img, name: json.name });
  gameDeck.push({ id: json.id, image: json.img, name: json.name }); //2 of each card
}

function collectCards(json) {
  const shuffledArray = shuffleArray(gameDeck);
  const cards = document.getElementsByClassName("card");
  // debugger;
  for (let i = 0; i < cards.length; i++) {
    // debugger;
    addCardListener(cards[i], shuffledArray[i]);
  }
}

function addCardListener(card, shuffledArray) {
  // debugger;
  card.addEventListener("click", () => {
    card.style.backgroundImage = `url('${shuffledArray.image}')`;
    currentFlipped += 1;
  });
}

function makeBoardOfXRows(rows) {
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < 8; j++) {
      const card = document.createElement("div");
      card.className = "card";
      card.id = `${i}${j}`;
      game.appendChild(card);
    }
  }
}

// function SetCardValue() {
//   const cards = document.getElementsByClassName("card");
//   for (let i = 0; i < gameDeck.length; i++) {
//   }
// }

// function doTheyMatch() {
//   currentFlipped = 0;
// }
