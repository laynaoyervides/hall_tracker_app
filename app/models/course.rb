class Course < ActiveRecord::Base
    belongs_to :instructor
    has_many :enrollments
    has_many :learners, through: :enrollments
end