const game = document.getElementById("game");

function populateGame(json) {
  for (let i = 0; i < numOfCards; i++) {
    const newDiv = document.createElement("div");
  }
}

function addEventToCard(card) {
  card.addEventListener("click", function(e) {
    e.preventDefault();
    console.log("Card Made");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(json => console.log(json));
  // console.log("working");
});
