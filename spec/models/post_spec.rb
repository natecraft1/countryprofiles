require 'spec_helper'

describe Post do

  before { @post = Post.new(category: "Expressions", content: "some text") }

  subject { @post }

  it { should respond_to(:category) }
  it { should respond_to(:content) }


	describe "should save a post to a country" do
		# before do 
		# 	fill_in :content, :with => "Hello"
		# 	click_button "Post"
		# end

		# it "should save a post to a specific country" do
		# 	expect(Country.find_by_name("Slovenia").posts.first.content).to eq("Dober dan") 
		# end

	end
end


questions:

is baxters code conflicting with the seed?
how can ruby know what @country is selected, both by the click and by the select form?
how to write these tests?