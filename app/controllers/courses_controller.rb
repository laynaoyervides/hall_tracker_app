class CoursesController < ApplicationController

skip_before_action :confirm_authentication
#before_action :set_course

#"/courses"
        def index
         @courses = Course.all
         render json: @courses
        end

#"/courses/:id" GET courses/1
    def show     
      @course = Course.find(params[:id])     
        render json: @course, include: ['learners']
    end

#POST course "/courses"
    def create
      course = Course.create!(course_params)
      render json: course, status: :created
    rescue ActiveRecord::RecordInvalid => e
      render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity

    
  end

# "/courses/:id"
  def update
    course = Course.find(params[:id])
    course.update!(course_params)
    render json: course, status: :accepted
    
  end

    #DELETE course "/courses/:id"
    def destroy
        course = Course.find(params[:id])
        course.destroy
        head :no_content
    end
    

    private
    def course_params
      params.permit(:course_name, :class_period, :instructor_id)
    end

    

    def authorize_instructor
      instructor_can_modify = @course.instructor_id === @current_instructor.id
      render json: { error: "You don't have permission to perform this action" }, status: :forbidden unless instructor_can_modify
    end

end