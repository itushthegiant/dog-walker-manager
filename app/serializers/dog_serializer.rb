class DogSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :owner_name, :breed, :img_url, :user_id, :walk_time, :walk_date

end
