class AddLocationToEvents < ActiveRecord::Migration[5.2]
  def change
    add_reference :events, :location, type: :uuid
  end
end
