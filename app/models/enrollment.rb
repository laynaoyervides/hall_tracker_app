class Enrollment < ActiveRecord::Base
    belongs_to :course
    belongs_to :learner

    #scope :find_enrollment_by_course, -> (searchterm) {where ('course_id === ?, searchterm)}

    
    #self.find_enrollment_by_course(searchterm)
    #course = course.find_by(course_id: searchterm)
    #if course
    #@enrollments = Enrollment.where(course_id: course.id)
end