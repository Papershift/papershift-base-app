# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(name: 'test', email: 'test@test.com')

Location.create(name: "Lagoa da Pampulha")
Location.create(name: "Parque Municipal de Belo Horizonte")

Event.create(starts_at: DateTime.now, ends_at: DateTime.now + 1.hour, location_id: Location.last.id)
