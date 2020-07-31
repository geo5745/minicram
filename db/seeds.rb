# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

dob = "19841013".to_date
dob2 = "19880215".to_date
User.create(username: "george", password: "espress0", birthday: dob, email:"g.rodnikov@gmail.com")
User.create(username: "demo", password: "demodemo", birthday: dob2, email:"demo@demo.com")