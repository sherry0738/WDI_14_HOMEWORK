     
require 'sinatra'
require 'sinatra/reloader'
require_relative 'db_config'
require_relative 'models/moviedb'
require 'httparty'


get '/' do
  @movies = Moviedb.all
  erb :index
end


get '/about' do
  erb :about
end



post '/search' do
	movie_name = params[:movie_name]
  @movies = HTTParty.get("http://www.omdbapi.com/?apikey=2f6435d9&s=#{movie_name}").parsed_response["Search"] 
  conn = PG.connect(dbname: 'moviedb')
  
  @movies.each do |movie|
    title = movie["Title"]
    res=conn.exec_params(%q{INSERT INTO moviesdb (title, year, image_url,imdb_id) VALUES ($1,$2,$3,$4)}, [movie["Title"],movie["Year"],movie["Poster"],movie["imdbID"]])
  end 
 # store all list results 
  conn.close 
	erb :search_result	
end

#title_search = "SElECT '#{params[:Title]}' FROM moviesdb;"
  # execute a sql statement
# close the db connection
get '/movie' do
  imdb_ID = params[:imdbID]

  conn = PG.connect(dbname: 'moviedb')
  selSql="SELECT * FROM moviesdb WHERE imdb_id =$1;"
  resp=conn.exec_params(selSql,[imdb_ID])  
  #create a new hash
  @movie = {}

  if resp[0]['rate'] != nil
    @movie["Title"]=resp[0]['title']
    @movie["Year"]=resp[0]['year']
    @movie["Poster"]=resp[0]['image_url']
    @movie["imdbRating"]=resp[0]['rate']
    @movie["imdbID"]=resp[0]['imdb_id']
    @movie["Plot"]=resp[0]['plot']
    @movie["Source"]= "local db"
  else
    @movie = HTTParty.get("http://www.omdbapi.com/?apikey=2f6435d9&i=#{imdb_ID}").parsed_response  
    @movie["Source"]= "HTTParty"
    update = "UPDATE moviesdb SET rate = $1, plot = $2 WHERE imdb_id = $3;"
    conn.exec_params(update,[@movie["imdbRating"],@movie["Plot"],imdb_ID])     
  end
  conn.close
  
  erb :movie
end





