class CreateAssignments < ActiveRecord::Migration[5.2]
  def change
    create_table :assignments, id: :uuid do |t|
      t.belongs_to :user, type: :uuid, index: true
      t.belongs_to :event, type: :uuid, index: true
    end

    add_index :assignments, [:event_id, :user_id], unique: true
  end
end
