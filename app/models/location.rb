class Location < ApplicationRecord

  ### ASSOCIATIONS ###
  has_many :events
  has_many :users, through: :events

  ### VALIDATIONS ###
  validates :name, uniqueness: true
end
