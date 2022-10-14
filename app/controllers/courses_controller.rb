class CoursesController < ApplicationController

#"/courses"
        def index
         @courses = Course.all
         render json: @courses
        end

#"/coursedetail" GET courses/1
    def show            
        render json: @current_course
    end
# "/editcourse"
  def update
    if @course.update(course_params)
      render json: @course, status: :ok
    else
      render json: @course.errors, status: :unprocessable_entity
    end
  end
        

end