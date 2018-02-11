Rails.application.routes.draw do
  resources :pokemons, only: [:new, :show, :create]
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

	get '/', to: 'pages#home'
	get '/pokemons', to: 'pokemons#index'
	get '/pokemons/:id', to: 'pokemons#show'
	get '/pokemons/new', to: 'pokemons#new' 
	post '/pokemons/:id', to: 'pokemons#create'
	get '/pokemons/:id/edit', to:'pokemons#edit'
	patch '/pokemons/:id', to: 'pokemons#update'
	get '/session', to:'session#new'
	post '/session', to:'session#signup' 
	post '/session', to:'session#create'

end





 