class ActivitySerializer < ActiveModel::Serializer
    attributes :id, :type, :duration, :created_at, :time_in, :time_out, :notes
    belongs_to :learner
end