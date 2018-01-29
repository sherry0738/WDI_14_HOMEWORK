class SessionController < ApplicationController

	def new
	end

	def signup
		user = User.new
		# user.name = params[:name]
		user.email = params[:email]
		user.password = params[:password]
		user.save
		session[:user_id] = user.id
		redirect_to "/"	
	end
	
	def login

	end

	def create
		user = User.find_by(email: params[:email])
		if user && user.authenticate(params[:password]) 
			session[:user_id] = user.id 
			redirect_to '/' 
		else
			session[:user_id] = nil
			redirect_to '/' 
		end
	end
	
	def destroy
		session[:user_id] = nil
		redirect_to '/'
	end

end
