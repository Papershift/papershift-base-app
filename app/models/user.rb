class User < ApplicationRecord
  has_paper_trail

  ### ASSOCIATIONS ###
  has_many :assignments
  has_many :events, through: :assignments

  # Chosen to keep locations through events, based on:
  # User has several locations, because he has several events.
  # Made sense based on what I understood from the app. If the user has to set
  # locations where he's willing to work, then a has many or a
  # has_and_belongs_to_many between users-locations had to be done.
  has_many :locations, through: :events

  ### VALIDATIONS ###
  validates :name, presence: true, length: { maximum: 255 }
  validates :email, presence: true, uniqueness: true, length: { maximum: 255 }

  ### CLASS METHODS ###
  def self.alive
    where(deleted_at: nil)
  end

  def self.deleted
    where.not(deleted_at: nil)
  end

  def self.find(id)
    where(deleted_at: nil, id: id).first
  end

  ### INSTANCE METHODS ###
  def destroy
    self.paper_trail_event = 'destroy'

    self.update(deleted_at: Time.now)
  end
end
