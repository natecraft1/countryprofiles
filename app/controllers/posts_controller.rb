class PostsController < ApplicationController
  
  def create
  	# @country = Country
  	@post = Post.new
  	render 'static_pages/home'
  end

end
