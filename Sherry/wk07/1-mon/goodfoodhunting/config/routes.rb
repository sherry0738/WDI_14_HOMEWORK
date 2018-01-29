Rails.application.routes.draw do
  
  resources :dishes  #(if this line shows, it will show all resource we had for dish)
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  # get '/', to:'donuts#yum' # donuts is controller name and yum will be method
  #             # controller file & method
  resources :comments
  root to:'pages#home'
  #get '/', to:'pages#home'(same with above)
  get '/about', to:'pages#about'
  get '/login', to:'session#login'
  get '/session', to:'session#new'
  post '/session', to:'session#signup' 
  post '/session', to:'session#create'
  post '/dishes', to:'dishes#create'
  get '/dishes/new', to:'dishes#new'
  get '/dishes', to:'dishes#index'
  get '/dishes/:id', to:'dishes#show' 
  get '/dishes/:id/edit', to:'dishes#edit'
  patch '/dishes/:id', to:'dishes#update'
  delete '/dishes/:id', to:'dishes#destroy'
  post '/comments', to:'comments#create'
end
	
