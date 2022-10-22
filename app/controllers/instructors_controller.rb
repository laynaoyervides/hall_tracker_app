class InstructorsController < ApplicationController
skip_before_action :confirm_authentication
    
    
    #get '/me'
    def show
        if current_instructor
            render json: current_instructor, status: :ok
        else
            render json: { error: 'No active session'}, status: :unauthorized
        end
    end

    #get all instructors list
    def index
        @instructors = Instructor.all
        render json: @instructor
       end

    
    #post /signup
    def create
        instructor = Instructor.create(instructor_params)
        if instructor.valid?
            session[:instructor_id] = instructor.id
            render json: instructor, status: :ok
        else
            render json: {error: instructor.errors }, status: :unprocessable_entity
        end
    end

    private

    def instructor_params
        params.permit(:username, :password, :password_confirmation)
    end
end
