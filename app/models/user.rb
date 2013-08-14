class User
  include MongoMapper::Document
  # { validate :name, presence: true

  key :name, String
  key :email, String


  validates_presence_of :name
  validates_presence_of :email
  validates_length_of :name, :within => 5..20
end
