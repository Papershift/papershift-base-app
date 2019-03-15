class CreateJoinTableLocationEventShip < ActiveRecord::Migration[5.2]
  def change
    create_join_table :locations, :events do |t|
      # t.index [:location_id, :event_id]
      # t.index [:event_id, :location_id]
    end
  end
end
