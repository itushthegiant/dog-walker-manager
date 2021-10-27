require 'faker'


User.destroy_all
Dog.destroy_all


User.create(username: "etamar", password: "password")
User.create(username: "yotam", password: "password")

Dog.create(name: "Lily", age: 1, owner_name: "Etamar", user_id: 30, breed: "pointer", img_url: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12232937/German-Shorthaired-Pointer-On-White-08.jpg")
