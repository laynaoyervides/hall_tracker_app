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
  get "/learnerdetail", to:"learners#show"
  patch "/editlearner", to: "learners#update"
  post "/createlearner", to:"learners#create"
  delete "/deletelearner", to: "learners#destroy"

  get "/courses", to: "courses#index"
  get "/coursedetail", to:"courses#show"
  patch "/editcourse", to: "courses#update"
  post "/createcourse", to:"courses#create"
  delete "/deletecourse", to: "courses#destroy"

  get "enrollments", to: "enrollments#index"
  post "createenrollment", to: "enrollments#create"
  patch "editenrollment", to:"enrollments#update"
  delete "deleteenrollment", to: "enrollments#destroy"


  Rails.application.routes.draw do
    # route to test your configuration
    get '/hello', to: 'application#hello_world'
  end
end
