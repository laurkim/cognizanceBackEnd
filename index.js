const game = document.getElementById("game");
const gameDeck = [];
let currentFlipped = 0;

document.addEventListener("DOMContentLoaded", () => {
  //set on click event when they say how many rows they want/reset game?
  makeBoardOfXRows(2); //move outside, give option to set how many rows? (how difficult)

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
  json.forEach(function(json) {
    addCardToDeck(json);
  });
  collectCards(json);
}

function addCardToDeck(json) {
  gameDeck.push({ id: json.id, image: json.img, name: json.name });
  gameDeck.push({ id: json.id + "a", image: json.img, name: json.name }); //2 of each card
}

function collectCards(json) {
  const cards = document.getElementsByClassName("card");
  const arr = [];
  for (let i = 0; i < cards.length; i++) {
    addCardListener(cards[i], json);
    // arr.push(cards[i]);
    // debugger;
  }
  // debugger;
  // return arr;
}

function addCardListener(card, json) {
  // debugger;
  // card.addEventListener("click", function() {
  //   const newImg = document.createElement("div");
  //   newImg.style.backgroundImage = "url('es_face_small.png')";
  //   card.appendChild(newImg);
  // debugger;
  // });
  card.addEventListener("click", () => {
    // console.log(card);
    // alert("this has been clicked");
    card.style.backgroundImage = "url('es_face_small.png')";
  });
}

// function addEventToCards(json) {
//   debugger;
//   for (const card of cards) {
//     debugger;
//     card.addEventListener("click", ev => {
//       ev.preventDefault();
//       // const randomIndex = Math.floor(Math.random() * gameDeck.length);
//       const newImg = document.createElement("img");
//       newImg.src = json.img;
//       card.appendChild(newImg);
// currentFlipped += 1;
//       // cards[i].style.backgroundImage = gameDeck[randomIndex];
//     });
//   }
// }

function makeBoardOfXRows(rows) {
  for (var i = 0; i < rows; i++) {
    //8 fits across arbitrary gameboard size I made
    // debugger;
    for (var j = 0; j < 8; j++) {
      // debugger;
      const card = document.createElement("div");
      card.className = "card";
      card.id = `${i}${j}`;
      // debugger;
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
