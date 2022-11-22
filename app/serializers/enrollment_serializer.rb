class EnrollmentSerializer < ActiveModel::Serializer
    attributes :id, :course_id, :learner_id, :semester
    belongs_to :course
    belongs_to :learner



end