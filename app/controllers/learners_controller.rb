class LearnersController < ApplicationController
  

before_action :confirm_authentication
before_action :authorize_instructor
    #before_action :set_learner

   # GET /learners
   def index
       @learners = Learner.all
       render json: @learners
     end

   # GET /learners/1
   def show
       render json: @learner
     end

# POST /learners
   def create
       learner = Learner.new(learner_params)
       if @learner.save
       render json: @learner, status: :created
       else
        render json: @learner.errors, status: :unprocessable_entity
       end
   
   end
# PATCH/PUT /learners/1
 def update
  if learner.update(learner_params)
     render json: learner, status: :accepted
   else
     render json: learner.errors, status: :unprocessable_entity
   end
 end

 # DELETE /tutorial/1
 def destroy
   @learner.destroy
 end

 private
   # Use callbacks to share common setup or constraints between actions.
  

   # Only allow a list of trusted parameters through.
   def learner_params
     params.permit(:name, :admin)
   end

   def set_learner
    @learner = Learner.find(params[:id])
   end

   def authorize_instructor
      instructor_can_modify = current_instructor.admin?
      render json: { error: "You don't have permission to perform this action" }, status: :forbidden unless instructor_can_modify
  end

end