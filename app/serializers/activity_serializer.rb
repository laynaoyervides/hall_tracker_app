class ActivitySerializer < ActiveModel::Serializer
    attributes :id, :type, :duration
    belongs_to :learner
end