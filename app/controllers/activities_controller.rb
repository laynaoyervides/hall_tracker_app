class ActivitiesController < ApplicationController
    before_action :find_activity, only: [:show, :update, :destroy]
   
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    rescue_from ActiveRecord::RecordNotFound, with:

    def index
        render json: Activiy.all, status: :ok
   end

     def show     
        render json: @activity, status: :ok
    end

    def create
        activity = Activity.create!(activity_params)
        render json: activity, status: :created
  
      end

    def update
        @activity.update!(activity_params)
        render json: @activity, status: :accepted
    end

    def destroy
        @activity.destroy
        head :no_content
    end

    private
   def activity_params 
    params.permit(:learner_id, :type, :duration, :time_in, :time_out, :notes, :created_at)
   end

   def find_activity
    @activity = Activity.find(params[:id])
  end

  #errors

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

  def render_not_found(error)
    render json: {message: error.message}, status: :not_found
  end 


end
