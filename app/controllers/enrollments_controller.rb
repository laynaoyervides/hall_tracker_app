class EnrollmentsController < ApplicationController
    before_action :find_enrollment, only: [:show, :update, :destroy]
    before_action :is_admin?

rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    # GET /enrollments
   def index
    render json: Enrollment.all, include: ['course', 'learner'], status: :ok
    end

    #def index
    # if params[:searchterm]
    #@enrollments = Enrollment.find_enrollment_by_course(params[:searchterm])
    #else
    #render json: Enrollment.all, status: :ok
    #end
    #end

# GET /enrollments/1
    def show
      render json: @enrollment, status: :ok
    end

# POST /enrollments
    def create
      enrollment = Enrollment.create!(enrollment_params)
      render json: enrollment, status: :created
    end
# PATCH/PUT /enrollments/1
    def update
      @enrollment.update!(enrollment_params)
      render json: @enrollment, status: :accepted
    end

# DELETE /enrollments/1
    def destroy
    @enrollment.destroy
      head :no_content
  end

private

# Only allow a list of trusted parameters through.
  def enrollment_params
    params.permit(:course_id, :learner_id)
  end

#extracting repetitive code where we're finding the enrollment
  def find_enrollment
    @enrollment = Enrollment.find(params[:id])
  end

  def is_admin?
    permitted = current_instructor.admin?
    render json: { error: "Only admin have permission to perform this action" }, status: :forbidden unless permitted
  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

  def render_not_found(error)
    render json: {message: error.message}, status: :not_found
  end

end