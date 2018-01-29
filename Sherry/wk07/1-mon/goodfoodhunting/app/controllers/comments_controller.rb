class CommentsController < ApplicationController

	# def show
	# 	@comments = Comment.where(dish_id: params[:id]) 		
	# end

	def create
		@comment = Comment.new
		@comment.body = params[:body] 
		@comment.dish_id = params[:dish_id]
		@comment.save # return a boolean
		#render :show
		redirect_to "/dishes/#{@comment.dish_id}"
	end
	

	

end

