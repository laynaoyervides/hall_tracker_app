class LearnersController < ApplicationController
  #before_action :set_learner, only: [:show, :update, :destroy]
  #before_action :authorize_instructor, only: [:create, :update, :destroy]
  skip_before_action :confirm_authentication

   # GET /learners
   def index
       @learners = Learner.all
       render json: @learners, include: :courses
     end

   # GET /learners/1
   def show
       render json: @learner
     end

# POST /learners
   def create
       learner = Learners.create!(learners_params)
       render json: learner, status: created
      
   
   end
# PATCH/PUT /learners/1
 def update
  learner = Learner.find(params[:id])
  if learner.update!(learner_params)
     render json: learner, status: :accepted
   else
     render json: @learner.errors, status: :unprocessable_entity
   end
 end

 # DELETE /tutorial/1
 def destroy
   @learner.destroy
 end

 private
   # Use callbacks to share common setup or constraints between actions.
   def set_learner
     @learner = Learner.find(params[:id])
   end

   # Only allow a list of trusted parameters through.
   def learner_params
     params.permit(:name)
   end

   def authorize_instructor
      instructor_can_modify = current_instructor.admin?
      render json: { error: "You don't have permission to perform this action" }, status: :forbidden unless instructor_can_modify
  end
end