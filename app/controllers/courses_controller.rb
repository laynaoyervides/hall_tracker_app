class CoursesController < ApplicationController


before_action :find_course, only: [:show, :update, :destroy]
before_action :is_creator?, only: [:update, :destroy]

rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

#"/courses"
    def index
         render json: Course.all, status: :ok
        end
#/searchcourses

        def search
          @courses = Course.where('course_name LIKE ?', '%' + params[:q]+ "%")
          render json: @courses, status: :ok
        end
#"/courses/:id" GET courses/1
    def show     
        render json: @course, include: ['learners'], status: :ok
    end

#POST course "/courses"
    def create
      course = Course.create!(course_params)
      render json: course, status: :created

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

   def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

  def render_not_found(error)
    render json: {message: error.message}, status: :not_found
  end 
end