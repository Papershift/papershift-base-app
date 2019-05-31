class CreateUserLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :user_locations, id: :uuid do |t|
      t.references :user, foreign_key: true, type: :uuid
      t.references :location, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
