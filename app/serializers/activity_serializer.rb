class ActivitySerializer < ActiveModel::Serializer
    attributes :id, :reason, :duration, :created_at, :time_in, :time_out, :notes, :out_of_class
    belongs_to :learner
end