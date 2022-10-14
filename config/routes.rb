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

  get "/learners", to: "learners#index"

  get "/courses", to: "courses#index"
  patch "editcourse", to: "courses#update"
  get "/coursedetail", to:"courses#show"
  post "/editcourse", to:"courses#create"
  delete "/deletecourse", to: "courses#destroy"

  Rails.application.routes.draw do
    # route to test your configuration
    get '/hello', to: 'application#hello_world'
  end
end
