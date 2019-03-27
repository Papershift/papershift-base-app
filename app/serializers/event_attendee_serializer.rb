class EventAttendeeSerializer < ActiveModel::Serializer
  attributes :id, :user, :event
end
