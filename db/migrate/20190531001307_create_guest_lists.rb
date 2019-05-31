class CreateGuestLists < ActiveRecord::Migration[5.2]
  def change
    create_table :guest_lists, id: :uuid do |t|
      t.references :user, foreign_key: true, type: :uuid
      t.references :event, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
