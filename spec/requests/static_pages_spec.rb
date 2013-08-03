

require 'spec_helper'

describe "Static pages" do

  describe "Home page" do
      
    before { visit '/static_pages/home' }

    it "should have the content 'Sample App'" do
      expect(page).to have_content('Sample App')
    end
    it "should have title 'This is the Home Page'" do
	  expect(page).to have_title('This is the Home Page')
	end
  end
  describe "Help Page" do
	before { visit '/static_pages/help' }

  	it "should have content 'Help page'" do
  		expect(page).to have_content('Help Page')
  	end
  	it "should have title 'This is the Help Page'" do
	  expect(page).to have_title('This is the Help Page')
	end
  end
  describe "About page" do
	before { visit "/static_pages/about" }

	it "should have content 'About'" do
		expect(page).to have_content("About")
	end
	it "should have title 'This is the About Page'" do
	  expect(page).to have_title('This is the About Page')
	end
  end
end
