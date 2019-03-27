class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events, id: :uuid do |t|
      t.string :title
      t.text :description
      t.text :category
      t.references :location, foreign_key: true, type: :uuid
      t.datetime :date
      t.belongs_to :user , foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
