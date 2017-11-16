const game = document.getElementById("game");
const gameDeck = [];
let howManyRows = 3;
let currentFlipped = 0;
let totalFlips = 0;
let matchId = [];

document.addEventListener("DOMContentLoaded", () => {
  //set on click event when they say how many rows they want/reset game?
  makeBoardOfXRows(howManyRows); //move outside, give option to set how many rows? (how difficult)

  fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(json => json);
  fetch("http://localhost:3000/cards")
    .then(res => res.json())
    .then(json => {
      initiateGameListener(json);
    });
});

// starts timer and allows user to play when start button is clicked
function initiateGameListener(json) {
  const startButton = document.getElementById("start-button");
  startButton.addEventListener("click", () => {
    generateCards(json);
    // timer();
  })
}

// function timer() {
//   let timeDiv = document.getElementsByClassName("timer-count");
//   let time = timeDiv[0].innerText;
//   time = "00:59";
//   timeDiv[0].innerText = time;
//   let seconds = parseInt(time.split(":")[1]);
//   let timer = setInterval(function() {
//     let timeDiv = document.getElementsByClassName("timer-count");
//     if (seconds === 0) {
//       console.log("timer is over");
//       clearInterval(timer)
//     } else if (seconds > 10) {
//       console.log("timer is not zero");
//         --seconds
//         timeDiv[0].innerText = `00:${seconds}`;
//     } else {
//       console.log("timer is less than 10");
//         --seconds
//         timeDiv[0].innerText = `00:0${seconds}`;
//     }
//   }, 1000)
// }

function resetGame() {
  const resetButton = document.getElementsByClassName("game-reset");
  resetButton.addEventListener("click", () => {
    fetch("http://localhost:3000/users")
      .then(res => res.json())
      .then(json => json);
    fetch("http://localhost:3000/cards")
      .then(res => res.json())
      .then(json => {
        initiateGameListener(json);
      });
  });
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
//randomizes images, adds an event listener to each card div, specific to an image
function collectCards(json) {
  const shuffledArray = shuffleArray(gameDeck); //change shuffleArray(gameDeck) to gameDeck to troubleshoot (wont shuffle)
  const cards = document.getElementsByClassName("card");
  // debugger;
  for (let i = 0; i < cards.length; i++) {
    // debugger;
    addCardListener(cards[i], shuffledArray[i]);
  }
}

//modern version of fischer-yates shuffle algorithm, shuffles array.
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
  gameDeck.push({ id: "a" + json.id, image: json.img, name: json.name }); //2 of each card
}

//adds a 'flipping' listener to each card on click
function addCardListener(card, shuffledArray) {
  card.addEventListener("click", function() {
    //fixes bug where you could click the same card twice and get a match
    if (this.id != matchId[1]) {
      //currentFlipped resets every 2nd click, and triggers a match check (doTheyMatch)
      if (currentFlipped != 2) {
        currentFlipped += 1;
        if (currentFlipped % 2 === 0) {
          totalFlips += 1; //increments score, by pair of clicks.
        }
        card.style.backgroundImage = `url('${shuffledArray.image}')`; //changes div image
        card.style.id = shuffledArray.id;
        matchId.push(card.style.id, card.id); //card.style.id is the id of the json image, card.id is the id of the div, used for determining matches
        if (currentFlipped === 2) {
          doTheyMatch();
        }
      }
    }
  });
}

//makes a game board of a certain number of rows of 8 cards.
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

function doTheyMatch() {
  if (
    matchId[0].toString() === "a" + matchId[2] ||
    "a" + matchId[0] === matchId[2].toString()
  ) {
    // if (matchId[0] === matchId[2] && matchId[1] != matchId[3]) { //also works, remove the "a" assignment from addCardToDeck. Less good, as id's should be unique
    theyMatch();
  } else {
    setTimeout(changeBack, 1500); //Want to make this a click event, not a timeout, but cant get the click working over the entire page.  Currently, it only works 'not on a card div'
  }
}

function theyMatch() {
  window.setTimeout(changeMatching, 500);
}

//makes a clone of the divs, removes the original (and their associated event listeners), sets the new clone opacity, resets the matchId array, resets the currently flipped cards counter
function changeMatching() {
  makeClone(1);
  makeClone(3);
  document.getElementById(matchId[1]).style.opacity = 0.4;
  document.getElementById(matchId[3]).style.opacity = 0.4;
  matchId = [];
  currentFlipped = 0;
}

//removes all event listeners, clones and appends div (so no more clicks can occur)
function makeClone(e) {
  const element = document.getElementById(matchId[e]);
  var clone = element.cloneNode();
  while (element.firstChild) {
    clone.appendChild(element.lastChild);
  }
  element.parentNode.replaceChild(clone, element);
}

//on wrong guesses, changes card image back to the 'back' of the card. resets matchId and currentFlipped
function changeBack() {
  document.getElementById(matchId[1]).style.background = "blue";
  document.getElementById(matchId[3]).style.background = "blue";
  matchId = [];
  currentFlipped = 0;
}
