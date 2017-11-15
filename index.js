const game = document.getElementById("game");
const gameDeck = [];
let howManyRows = 3;
let currentFlipped = 0;
let totalFlips = 0;

document.addEventListener("DOMContentLoaded", () => {
  //set on click event when they say how many rows they want/reset game?
  makeBoardOfXRows(howManyRows); //move outside, give option to set how many rows? (how difficult)

  fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(json => console.log("test"));
  fetch("http://localhost:3000/cards")
    .then(res => res.json())
    .then(json => {
      startGameListener(json);
    });
});

function startGameListener(json) {
  const startButton = document.getElementById("start-button");
  startButton.addEventListener("click", () => {
    console.log("you've clicked start")
    generateCards(json);
    startTimer();
  })
}

function startTimer() {
  let timeDiv = document.getElementsByClassName("timer-count");
  let time = timeDiv[0].innerText;
  time = 0;
  // console.log(time[0].innerText);
  setInterval(function() {
    console.log(time);
    ++time;
    timeDiv[0].innerText = time;
  }, 1000)
}

function generateCards(json) {
  makeDecks(json);
  collectCards(json);
}

//gets random card from all json, addCardToDe adds to gameDeck, then removes from json array for next iteration
function makeDecks(json) {
  for (let i = 0; i < howManyRows * 4; i++) {
    var rand = json[Math.floor(Math.random() * json.length)];
    let index = json.indexOf(rand);
    addCardToDeck(rand);
    if (index > -1) {
      //removes from json array
      json.splice(index, 1);
    }
  }
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
//push 2 of the same card to gameDeck (for matching)
function addCardToDeck(json) {
  gameDeck.push({ id: json.id, image: json.img, name: json.name });
  gameDeck.push({ id: json.id, image: json.img, name: json.name }); //2 of each card
}

function addCardListener(card, shuffledArray) {
  // debugger;
  card.addEventListener("click", () => {
    currentFlipped += 1;
    totalFlips += 1;
    // console.log(currentFlipped);
    card.style.backgroundImage = `url('${shuffledArray.image}')`;
    card.style.id = shuffledArray.id;
    if (currentFlipped === 2) {
      doTheyMatch();
    }
  });
}

function makeBoardOfXRows(rows) {
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < 8; j++) {
      const card = document.createElement("div");
      card.className = "card";
      card.id = `id-${i}${j}`;
      game.appendChild(card);
    }
  }
}

// function SetCardValue() {
//   const cards = document.getElementsByClassName("card");
//   for (let i = 0; i < gameDeck.length; i++) {
//   }
// }

function doTheyMatch() {
  currentFlipped = 0;
}
