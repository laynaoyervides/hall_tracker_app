class CoursesController < ApplicationController

    #"/courses"
        def index
         @courses = Course.all
         render json: @courses
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