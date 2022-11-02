class InstructorSerializer < ActiveModel::Serializer
    attributes :id, :username, :email, :admin
    has_many :courses
end