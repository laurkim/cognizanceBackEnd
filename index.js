const game = document.getElementById("game");
class Card {
  constructor() {
    this.img = json.img;
    this.name = json.name;
  }
}

function populateGame(numOfCards) {
  for (var i = 0; i < numOfCards; i++) {
    const newCard = new Card();
    newCard.class = "card";
    addEvent(newCard);
  }
}

function addEvent(card) {
  card.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("Card Made");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // fetch("http://localhost:3000/cards")
  //   .then(res => res.json())
  //   .then(res => console.log(res));
  console.log("working");
  populateGame();
});
