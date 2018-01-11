     
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get '/' do
  erb :index
end

get '/about' do
  erb :about
end


get '/search' do
	addr = params[:movie_name]
	url = "http://www.omdbapi.com/?apikey=2f6435d9&s=#{addr}"
	@movie = HTTParty.get(url).parsed_response["search"]
	
	erb :search_result	
end


# get '/movie' do
# 	url = "http://www.omdbapi.com/?apikey=2f6435d9&s=#{params[:movie_name]}"
# 	erb :result
# end


