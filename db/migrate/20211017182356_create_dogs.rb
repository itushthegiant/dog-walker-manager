class CreateDogs < ActiveRecord::Migration[6.1]
  def change
    create_table :dogs do |t|
      t.string :name
      t.integer :age
      t.string :owner_name
      t.integer :user_id

      t.timestamps
    end
  end
end
