class PostsController < ApplicationController
  
  def create
  	country = Country.find(params[:post][:country])

  	post = Post.new(post_params)
  	country.posts << post
  	country.save
  	# post.save
  	redirect_to root_path
	  end

  private
  
  def post_params
  	params.require(:post).permit(:content)
  end
end

# do the form as ajax 

# strong params required every time you do mass assignments (update_attributes, new, create)