class PokemonsController < ApplicationController

	def index
		@pokemons = Pokemon.all
	end

	def show
		@pokemon = Pokemon.find(params[:id])	
	end

	def new	
	end

	def create
		pokemon = Pokemon.new
		pokemon.species = params[:species]
		pokemon.nickname = params[:nickname]
		pokemon.level = params[:level]
		pokemon.img_url = params[:img_url]
		if pokemon.save
			redirect_to '/'
		else
			render :new
		end
	end

	def edit
		@pokemon = Pokemon.find(params[:id])
	end

	def update
		@pokemon = Pokemon.find(params[:id]) 
		@pokemon.nickname = params[:nickname]
		@pokemon.img_url = params[:img_url]
		@pokemon.species = params[:species]
		@pokemon.ability = params[:ability]
		@pokemon.level = params[:level]
		@pokemon.save
		redirect_to "/pokemons/#{params[:id]}"
	end

	def destroy
		pokemon = Pokemon.find(params[:id])
		if pokemon.destroy
			redirect_to '/pokemons'
		else
			render :show
		end
	end
end
