class DogSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :owner_name, :user_id

  has_one :user
end
