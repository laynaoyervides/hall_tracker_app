class CoursesController < ApplicationController

skip_before_action :confirm_authentication


#"/courses"
        def index
         @courses = Course.all
         render json: @courses
        end

#"/courses/:id" GET courses/1
    def show            
        render json: @course
    end

#POST course "/courses"
    def create
      course = Course.new(course_params)
    if course.save
      render json: course, status: created
    else 
        render json: @course.errors, status: :unprocessable_entity
      end
  end

# "/courses/:id"
  def update
    if @course.update(course_params)
      render json: @course, status: :accepted
    else
      render json: @course.errors, status: :unprocessable_entity
    end
  end

    #DELETE course "/courses/:id"
    def destroy
        @course.destroy
    end
    

    private
    def course_params
      params.permit(:course_name, :class_period, :instructor_id)
    end

    def set_course
      @course = Course.find(params[:id])
    end

    def authorize_instructor
      instructor_can_modify = @course.instructor_id === @current_instructor.id
      render json: { error: "You don't have permission to perform this action" }, status: :forbidden unless instructor_can_modify
    end

end