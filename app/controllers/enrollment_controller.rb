class EnrollmentController < ApplicationController
    skip_before_action :confirm_authentication

    # GET /enrollments
   def index
    @enrollments = Enrollment.all
    render json: @enrollments, include: :courses
  end

# GET /enrollments/1
def show
    render json: @enrollment
  end

# POST /enrollments
def create
    enrollment = Enrollments.create!(enrollments_params)
    render json: enrollment, status: accepted
   

end
# PATCH/PUT /enrollments/1
def update
if @enrollment.update(learner_params)
  render json: @enrollment
else
  render json: @enrollment.errors, status: :unprocessable_entity
end
end

# DELETE /enrollments/1
def destroy
@enrollment.destroy
end

private
# Use callbacks to share common setup or constraints between actions.
def set_enrollment
  @enrollment = Enrollment.find(params[:id])
end

# Only allow a list of trusted parameters through.
def learner_params
  params.permit(:course_id, :instructor_id)
end

end