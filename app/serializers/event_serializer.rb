class EventSerializer < ActiveModel::Serializer
  attributes :id, :starts_at, :ends_at

  belongs_to :location
end
