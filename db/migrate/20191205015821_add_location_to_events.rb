class AddLocationToEvents < ActiveRecord::Migration[5.2]
  def change
    add_reference :events, :location, foreign_key: true, type: :uuid
  end
end
