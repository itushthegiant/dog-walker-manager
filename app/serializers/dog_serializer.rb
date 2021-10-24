class DogSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :owner_name, :user_id

end
