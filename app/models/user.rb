class User < ApplicationRecord
  has_paper_trail
  has_secure_password
  has_many :events

  ### VALIDATIONS ###
  validates :name, presence: true, length: {maximum: 255}
  validates :email, presence: true, uniqueness: true, length: {maximum: 255}
  validates :password, presence: true

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

  def self.find_by_email(email)
    where(email: email).first
  end

  ### INSTANCE METHODS ###
  def destroy
    self.paper_trail_event = 'destroy'

    self.update(deleted_at: Time.now)
  end
end
