class Country
  include MongoMapper::Document

  key :name, String
  key :abbr, String
  
  many :posts

  def self.loadjson
  	# load the worldcountry file

 		file = File.read(File.join(Rails.root, 'public', 'worldcountries.geo.json'))
 		
 		jsonobject = JSON.parse(file)
  	# grab the names from each
  	jsonobject['features'].each { |x| 
  		country = Country.new(name: x['properties']['name']) 
  		# country.save
  	}

  end
end

