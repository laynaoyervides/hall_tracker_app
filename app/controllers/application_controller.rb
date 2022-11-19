class ApplicationController < ActionController::API
    include ActionController::Cookies

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    before_action :confirm_authentication

    def current_instructor
      @current_instructor ||= Instructor.find_by(id: session[:instructor_id])
      #memoization
    end
      
    private

    def logged_in?
      !!current_instructor
    end
      
    def confirm_authentication
      render json: { error: "You must be logged in to do that." }, status: :unauthorized unless logged_in?
    end
    
    def render_unprocessable_entity(invalid)
      render json: {errors: invalid.record.errors}, status: :unprocessable_entity
  end 

   def render_not_found(error)
      render json: {errors: {error.model => "Not Found"}}, status: :not_found
  end 
end
