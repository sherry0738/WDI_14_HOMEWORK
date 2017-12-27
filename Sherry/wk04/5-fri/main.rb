require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'
require 'pry'

get '/' do 
	stock_symbol = params["stock"]
	@stock = StockQuote::Stock.quote("#{stock_symbol}")
	erb(:index)
end
# binding.pry
