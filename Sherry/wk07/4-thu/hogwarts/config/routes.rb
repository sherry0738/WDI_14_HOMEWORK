Rails.application.routes.draw do

  root "houses#index"
  resource :houses, only: [:index, :show]
  resources :students, only: [:index, :show]

get '/', to:'houses#index'
get '/houses/:id', to: 'houses#show'
get '/students', to: 'students#index'
get '/students/:id', to: 'students#show'
get '/students/new', to: 'students#new' 
post '/students/new', to: 'students#create'

end


