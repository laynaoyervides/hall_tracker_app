class LearnersController < ApplicationController

     #"/learners"
     def index
        @learners = Learner.all
        render json: @learners
       end

end