Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :courses 
  resources :learners
  resources :enrollments 
  resources :activities
  
  # Defines the root path route ("/")
#  get "/courses/:id", to: "courses#show"

  # root "articles#index"
  get "/me", to: "instructors#show"
  post "/signup", to: "instructors#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  get "instructors", to: "instructors#index"

#search routes
get "/searchlearners", to:"learners#search"

#search for course by the coursename
get "/searchcourses", to:"courses#search"
 

end
