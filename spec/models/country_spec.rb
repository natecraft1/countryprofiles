require 'spec_helper'

describe Country do

	it "should have each country name in the db" do
		c = Country.new 
		c.name = "Afghanistan"
		expect(c.name).to eq("Afghanistan")
	end
end
