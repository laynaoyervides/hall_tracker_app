class CoursesController < ApplicationController
#before_action :authorize_instructor
before_action :find_course, only: [:show, :update, :destroy]
before_action :is_creator?, only: [:update, :destroy]
#"/courses"
    def index
         render json: Course.all, status: :ok
        end

#"/courses/:id" GET courses/1
    def show     
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
    @course.update!(course_params)
    render json: @course, status: :accepted
    
  end

    #DELETE course "/courses/:id"
    def destroy
        @course.destroy
        head :no_content
    end
    

    private
    def course_params
      params.permit(:course_name, :class_period, :instructor_id)
    end

    #extract repetitive code where we're finding the course and creating an instance variable
    def find_course
      @course = Course.find(params[:id])
    end

   def is_creator?
      permitted = @course.instructor_id === current_instructor.id 
      render json: {errors: {Instructor: "did not create this course"}}, status: :forbidden unless permitted
   end

end