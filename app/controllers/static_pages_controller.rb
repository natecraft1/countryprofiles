class StaticPagesController < ApplicationController
  def home
  	@title = "Home"
  	# @country = 
  	@post = Post.new
  end

  def help
  	@title = "Help"
  end

  def about
  	@title = "About"
  end
end
