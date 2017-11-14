const game = document.getElementById("game");
const gameDeck = [];

function addCardToDeck(json) {
  // const newCard = document.createElement("img");
  // console.log(json);
  // console.log(json.img.url);
  // newCard.src = json.img;
  // game.appendChild(newCard);
  gameDeck.push({ id: json.id, image: json.img, name: json.name });
  gameDeck.push({ id: json.id, image: json.img, name: json.name }); //2 of each card
}

function addEventToCard(card) {
  card.addEventListener("click", function(e) {
    e.preventDefault();
    // console.log("Card Made");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  makeBoardOfXRows(4); //move outside, give option to set how many rows? (how difficult)
  fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(json => console.log(json));
  fetch("http://localhost:3000/cards")
    .then(res => res.json())
    .then(json =>
      json.forEach(function(imageJson) {
        // addCardToDeck(imageJson);
        console.log("working");
      })
    );
});

function makeBoardOfXRows(rows) {
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < rows; j++) {
      const card = document.createElement("div");
      card.className = "card";
      card.id = `${i}${j}`;
      game.appendChild(card);
    }
  }
}
