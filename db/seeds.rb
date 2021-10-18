require 'faker'


User.destroy_all
Dog.destroy_all


User.create(username: "etamar", password: "password")
User.create(username: "yotam", password: "password")

Dog.create(name: "Lily", age: 1, owner_name: "Etamar")
Dog.create(name: "Brooklyn", age: 2, owner_name: "Yonatan")
Dog.create(name: "River", age: 1, owner_name: "Maggie")
Dog.create(name: "Lulu", age: 1, owner_name: "Chris")
Dog.create(name: "Credit", age: 10, owner_name: "Andrew")