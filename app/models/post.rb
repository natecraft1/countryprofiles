class Post
  include MongoMapper::EmbeddedDocument

  key :category, String
  key :text, String
end