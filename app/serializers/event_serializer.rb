class EventSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :date, :location, :category, :user, :attendees

  def attendees
    ActiveModelSerializers::SerializableResource.new(EventAttendee.where(event_id: object.id), each_serializer: EventAttendeeSerializer)
  end
end
