# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create(name: "Laura", highscore: 250)
User.create(name: "Robert", highscore: 499)
User.create(name: "John", highscore: 70)
User.create(name: "Jane", highscore: 178)
User.create(name: "Stan", highscore: 309)
User.create(name: "Julie", highscore: 438)

Card.create(name: "applechip", img: "lib/images/apple_chips.png")
Card.create(name: "apple", img: "lib/images/apple.png")
Card.create(name: "avocado", img: "lib/images/avocado.png")
Card.create(name: "beer", img: "lib/images/beer.png")
Card.create(name: "breakfast", img: "lib/images/breakfast.png")
Card.create(name: "burger", img: "lib/images/burger.png")
Card.create(name: "cherries", img: "lib/images/cherries.png")
Card.create(name: "chicken", img: "lib/images/chicken.png")
Card.create(name: "cookie", img: "lib/images/cookie.png")
Card.create(name: "croissant", img: "lib/images/croissant.png")
Card.create(name: "cupcake", img: "lib/images/cupcake.png")
Card.create(name: "donut", img: "lib/images/donut.png")
Card.create(name: "es", img: "lib/images/es_face_small.png")
Card.create(name: "fries", img: "lib/images/fries.png")
Card.create(name: "icecream", img: "lib/images/ice_cream.png")
Card.create(name: "nachos", img: "lib/images/nachos.png")
Card.create(name: "oreo", img: "lib/images/oreo.png")
Card.create(name: "pizza", img: "lib/images/pizza.png")
Card.create(name: "popcorn", img: "lib/images/popcorn.png")
Card.create(name: "potatochips", img: "lib/images/potato_chips.png")
Card.create(name: "taco", img: "lib/images/taco.png")
