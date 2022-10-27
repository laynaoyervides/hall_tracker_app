class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordNotFound, with: :not_found

    before_action :confirm_authentication

      
    private

    def current_instructor
      @current_instructor ||= Instructor.find_by(id: session[:instructor_id])
    end

    def logged_in?
      !!current_instructor
    end
      
    def confirm_authentication
      render json: { error: "You must be logged in to do that." }, status: :unauthorized unless logged_in?
    end
    
    def not_found(e)
      render json: {error: e.message }, status: :not_found
    end
end
