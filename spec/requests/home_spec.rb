require 'spec_helper'

describe 'Home Page' do
	before { visit root_path }
	it "should have content" do
		expect(page).to have_field("Type a Country");
	end
end


