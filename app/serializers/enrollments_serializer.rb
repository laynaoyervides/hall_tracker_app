class EnrollmentSerializer <ActiveModel :: Serializer
    attributes :course_id, :learner_id
    belongs_to :courses
    belongs_to :learners

end