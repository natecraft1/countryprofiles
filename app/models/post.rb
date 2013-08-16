class Post
  include MongoMapper::EmbeddedDocument

  belongs_to :category
  belongs_to :country
  
  key :content, String

  validates_length_of :content, :within => 5..100

end