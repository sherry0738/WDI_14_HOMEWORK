require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'
require 'pry'

get '/' do 
	stock_symbol = params["stock"]
	@stock = StockQuote::Stock.quote("#{stock_symbol}")
	# @name = stock.name
	erb(:index)
end
# binding.pry
