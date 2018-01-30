     
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

get '/movie' do
  addr = params[:title]
  url = ("http://www.omdbapi.com/?t=#{addr}&apikey=2f6435d9")
  @movie = HTTParty.get(url).parsed_response["search"]
  # @title = film["Title"]
  # @rate = film["Rate"]
  # @year = film["Year"]
  # @image_src = film["Poster"]
  # @plot = film["Plot"]
  erb :search_result

end
# get '/movie' do
# 	url = "http://www.omdbapi.com/?apikey=2f6435d9&s=#{params[:movie_name]}"
# 	erb :result
# end


