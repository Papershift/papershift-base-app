class Event < ApplicationRecord

  ### ASSOCIATIONS ###
  has_many :assignments
  has_many :users, through: :assignments

  belongs_to :location
end
