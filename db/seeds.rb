# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = [
  {name: "Laura", highscore: 1000},
  {name: "Robert", highscore: 1001},
  {name: "John", highscore: 1002},
  {name: "Jane", highscore: 900},
  {name: "Stan", highscore: 500},
  {name: "Julie", highscore: 5000}
]

cards = [
  {name: "Charmander", img: "lib/images/charmander.png"},
  {name: "Eevee", img: "lib/images/eevee2.png"},
  {name: "Es", img: "lib/images/es_face_small.png"},
  {name: "Gengar", img: "lib/images/gengar2.png"},
  {name: "Ghastly", img: "lib/images/ghastly2.png"},
  {name: "Golem", img: "lib/images/golem2.png"},
  {name: "Mew", img: "lib/images/mew2.png"},
  {name: "Pidgey", img: "lib/images/pidgey.png"},
  {name: "Pikachu", img: "lib/images/pikachu.png"},
  {name: "Psyduck", img: "lib/images/psyduck2.png"},
  {name: "Squirtle", img: "lib/images/squirtle.png"},
  {name: "Swinub", img: "lib/images/swinub.png"},
  {name: "Togepi", img: "lib/images/togepi2.png"},
  {name: "Zubat", img: "lib/images/zubat2.png"},
  {name: "Bulbasaur", img: "lib/images/bulbasaur2.png"},
  {name: "Caterpie", img: "lib/images/caterpie2.png"},
  {name: "Farfetchd", img: "lib/images/farfetchd2.png"},
  {name: "Piplup", img: "lib/images/piplup2.png"},
  {name: "Raticate", img: "lib/images/raticate2.png"},
  {name: "Sandshrew", img: "lib/images/sandshrew2.png"}
]

users.each do |user|
  User.create(name: user.name, highscore: user.highscore)
end


cards.each do |card|
  Card.create(name: card.name, img: img)
end
