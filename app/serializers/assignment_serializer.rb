# frozen_string_literal: true

class AssignmentSerializer < ActiveModel::Serializer
  attributes :id

  belongs_to :user
  belongs_to :event, key: :shift
end
