class LearnersController < ApplicationController
  
before_action :confirm_authentication
before_action :authorize_instructor, only: [:update, :destroy, :create]
    
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
   # GET /learners
   def index
       @learners = Learner.all
       render json: @learners
     end

   # GET /learners/1
   def show
       @learner = Learner.find(params[:id])
       render json: @learner
     end

# POST /learners
   def create
       learner = Learner.create!(learner_params)
       render json: learner, status: :created
      rescue ActiveRecord::RecordInvalid => e
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
       
   
   end
# PATCH/PUT /learners/1
 def update
    learner =Learner.find(params[:id])
    learner.update!(learner_params)
     render json: learner, status: :accepted
 end

 # DELETE /learner/1
 def destroy
    learner = Learner.find(params[:id])
    learner.destroy
    head :no_content 
  end

 private
   # Use callbacks to share common setup or constraints between actions.
   # Only allow a list of trusted parameters through.
   def learner_params
     params.permit(:name, :admin)
   end

   def authorize_instructor
      instructor_can_modify = current_instructor.admin?
      render json: { error: "You don't have permission to perform this action" }, status: :forbidden unless instructor_can_modify
  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors }, status: :unprocessable_entity
    end

  def render_not_found(error)
    render json: {errors: {error.model => "Not Found"}}, status: :not_found
  end

end