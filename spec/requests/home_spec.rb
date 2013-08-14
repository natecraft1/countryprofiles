require 'spec_helper'

describe 'Home Page' do
	before { visit root_path }
	it "should have content" do
		expect(page).to have_field("Type a Country")
	end
	
	it 'routes /users/new to users#new' do
  expect(get: '/users/new').to route_to(
      controller: 'users',
      action: 'new'
    )
	end
	
end



