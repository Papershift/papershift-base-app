class UserSerializer < ActiveModel::Serializer
  ### CACHING ###
  cache key: 'user'

  ### ATTRIBUTES ###
  attributes :name, :email, :id
end
