Rails.application.routes.draw do

  resources :likes
  get '/', to:'pages#home'
  get '/login', to:'session#login'
  get '/session', to:'session#new'
  post '/session', to:'session#signup' 
  post '/session', to:'session#create' 


  # POST  /session(.:format)  session#create

  delete '/session', to: 'session#destroy'

# get '/projects', to:'projects#index'
  get '/projects/new', to: 'projects#new' 
  post '/projects', to: 'projects#create'
  get '/projects/:id', to: 'projects#show'
  post '/projects/:id', to: 'projects#create'
  get '/projects/:id/edit', to:'projects#edit'
  patch '/projects/:id', to: 'projects#update'
  post '/comments', to: 'comments#create'


  resources :projects, only: [:new, :show, :create] #// except: [:new, :create] #from the part of only:[]/ except: [], it's optional  
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
