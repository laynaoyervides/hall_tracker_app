Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :courses 
  resources :learners
  
  
  
  # Defines the root path route ("/")

  # root "articles#index"
  get "/me", to: "instructors#show"
  post "/signup", to: "instructors#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/courses", to: "courses#index"
  get "/learners", to: "learners#index"
  patch "editcourse", to: "courses#update"

  Rails.application.routes.draw do
    # route to test your configuration
    get '/hello', to: 'application#hello_world'
  end
end
