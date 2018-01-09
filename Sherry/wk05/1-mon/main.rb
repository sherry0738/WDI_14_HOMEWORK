     
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


get '/' do
  erb :index
end

get '/about' do
  erb :about
end

get '/movie' do
	
	movie_name = params[:movie_name]
	@film = HTTParty.get("http://omdbapi.com/?apikey=2f6435d9&t=#{movie_name}")
	@film.parsed_response
	
	erb :movie
end

get '/name_input' do

end


