class CourseSerializer < ActiveModel::Serializer

    attributes :id, :course_name, :class_period, :instructor_id
    belongs_to :instructor
   
end