class CreateEventAttendees < ActiveRecord::Migration[5.2]
  def change
    create_table :event_attendees, id: :uuid do |t|
      t.references :user, foreign_key: true, type: :uuid
      t.references :event, foreign_key: true, type: :uuid

      t.timestamps
    end
  end
end
