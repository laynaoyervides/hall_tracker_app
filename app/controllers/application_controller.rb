class ApplicationController < ActionController::API
    include ActionController::Cookies

    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
      end

    def current_instructor
      Instructor.find_by(id: session[:instructor_id])
    end
      
    def not_found(e)
      render json: {error: e.message }, status: :not_found
    end
end
