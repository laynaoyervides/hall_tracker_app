class CoursesController < ApplicationController

skip_before_action :confirm_authentication


#"/courses"
        def index
         @courses = Course.all
         render json: @courses, include: :learners
        end

#"/coursedetail" GET courses/1
    def show            
        render json: @current_course, include: :learners
    end

# "/editcourse"
  def update
    course = Course.find_by(id: params[:id])
    if course.update!(course_params)
      render json: course, status: :accepted
    else
      render json: @course.errors, status: :unprocessable_entity
    end
  end



  #POST course "/createcourse"
    def create
        course = Course.create(course_params)
        render json: course, status: accepted
    end

    #DELETE course "/deletecourse"
    def destroy
        @course.destroy
    end
    

    private
    def course_params
      params.permit(:course_name, :class_period, :instructor_id)
    end
end