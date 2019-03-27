class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations, id: :uuid do |t|
      t.string :name
      t.belongs_to :user, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
