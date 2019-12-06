class CreateUserEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :user_events, id: :uuid do |t|
      t.belongs_to :user, null: false, foreign_key: true, type: :uuid
      t.belongs_to :event, null: false, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
