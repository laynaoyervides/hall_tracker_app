class SessionsController < ApplicationController

    # post '/login'
    def create
    instructor = Instructor.find_by_username(params[:username])
      if instructor&.authenticate(params[:password])
        session[:instructor_id] = instructor.id
        render json: instructor, status: :ok
      else
        render json: { error: 'invalid credentials' }, status: :unauthorized
      end
    end
  
    # delete '/logout'
    def destroy
      session.delete(:instructor_id)
    end
  
  end