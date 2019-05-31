class Event < ApplicationRecord
  has_many :guest_lists
  has_many :users, through: :guest_lists
end
