# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

cards = [
  ["Charmander", "lib/images/charmander.png"],
  ["Eevee", "lib/images/eevee2.png"],
  ["Es", "lib/images/es_face_small.png"],
  ["Gengar", "lib/images/gengar2.png"],
  ["Ghastly", "lib/images/ghastly2.png"],
  ["Golem", "lib/images/golem2.png"],
  ["Mew", "lib/images/mew2.png"],
  ["Pidgey", "lib/images/pidgey.png"],
  ["Pikachu", "lib/images/pikachu.png"],
  ["Psyduck", "lib/images/psyduck2.png"],
  ["Squirtle", "lib/images/squirtle.png"],
  ["Swinub", "lib/images/swinub.png"],
  ["Togepi", "lib/images/togepi2.png"],
  ["Zubat", "lib/images/zubat2.png"]
]

cards.each do |name, img|
  Card.create(name: name, img: img)
end
