class InstructorsController < ApplicationController

    #get '/me'
    def show
        if current_instructor
            render json: current_instructor, status: :ok
        else
            render json: { error: 'No active session'}, status: :unauthorized
        end
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
