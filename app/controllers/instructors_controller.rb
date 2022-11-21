class InstructorsController < ApplicationController
skip_before_action :confirm_authentication, only: :create
    
 #get all instructors list
 def index
    @instructors = Instructor.all
    render json: @instructors, include: ['courses', 'courses.learners']
   end    

    #get '/me'
    def show
        if current_instructor
            render json: current_instructor , include: ['courses', 'courses.learners']
        else
            render json: { error: 'No active session'}, status: :unauthorized
        end
    end
   

    #post /signup
    def create
        instructor = Instructor.create(instructor_params)
        if instructor.valid?
            session[:instructor_id] = instructor.id
            #above is us remembering who our user is
            render json: instructor, status: :ok
        else
            render json: {error: instructor.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def instructor_params
        params.permit(:username, :email, :password, :password_confirmation)
    end
end
