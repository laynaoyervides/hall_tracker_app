class ActivitiesController < ApplicationController
   before_action :find_activity, only: [:show, :update, :destroy]
   
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
    params.permit(:learner_id, :type, :duration)
   end

   def find_activity
    @activity = Activity.find(params[:id])
  end


end
