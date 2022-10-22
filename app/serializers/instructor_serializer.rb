class InstructorSerializer < ActiveModel::Serializer
    attributes :id, :username, :email, :admin
end