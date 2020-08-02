# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

dob = "19841013".to_date
dob2 = "19880215".to_date
dob3 = "20070304".to_date

#User.create(username: "george", password: "espress0", birthday: dob, email:"g.rodnikov@gmail.com")
#User.create(username: "demo", password: "demodemo", birthday: dob2, email:"demo@demo.com")


Deck.create(title: "Soviet Republics and Capitals", description: "Learn the capitals of the republics of the former USSR!", user_id: 1)

Card.create(term:"Russia", definition:"Moscow", deck_id: Deck.first.id)
Card.create(term:"Ukraine", definition:"Kiev", deck_id: Deck.first.id)
Card.create(term:"Belarus", definition:"Minsk", deck_id: Deck.first.id)
Card.create(term:"Kazakhstan", definition:"Alma-ata", deck_id: Deck.first.id)
Card.create(term:"Georgia", definition:"Tbilisi", deck_id: Deck.first.id)

Card.create(term:"Azerbaijan", definition:"Baku", deck_id: Deck.first.id)
Card.create(term:"Armenia", definition:"Yerevan", deck_id: Deck.first.id)
Card.create(term:"Latvia", definition:"Riga", deck_id: Deck.first.id)
Card.create(term:"Estonia", definition:"Tallinn", deck_id: Deck.first.id)
Card.create(term:"Lithuania", definition:"Vilnius", deck_id: Deck.first.id)

Card.create(term:"Uzbekistan", definition:"Tashkent", deck_id: Deck.first.id)
Card.create(term:"Kyrgizstan", definition:"Bishkek", deck_id: Deck.first.id)
Card.create(term:"Turkmenistan", definition:"Ashkhabad", deck_id: Deck.first.id)
Card.create(term:"Tadjikistan", definition:"Dushanbe", deck_id: Deck.first.id)
Card.create(term:"Moldova", definition:"Kishinev", deck_id: Deck.first.id)

