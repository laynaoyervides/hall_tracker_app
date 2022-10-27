class InstructorsController < ApplicationController
skip_before_action :confirm_authentication
    
    
    #get '/me'
    def show
        if current_instructor
            render json: current_instructor, status: :created
        else
            render json: { error: 'No active session'}, status: :unauthorized
        end
    end

    #get all instructors list
    def index
        @instructors = Instructor.all
        render json: @instructors
       end

   

    #post /signup
    def create
        instructor = Instructor.create(instructor_params)
        if instructor.valid?
            session[:instructor_id] = instructor.id
            render json: instructor, status: :ok
        else
            render json: {error: instructor.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def instructor_params
        params.permit(:instructor, :username, :email, :password, :password_confirmation)
    end
end
