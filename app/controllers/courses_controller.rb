class CoursesController < ApplicationController

    #"/courses"
        def index
         @courses = Course.all
         render json: @courses
        end

end