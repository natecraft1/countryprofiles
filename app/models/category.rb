class Category
  include MongoMapper::Document

  key :name, String

  many :posts

end
