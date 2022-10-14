class LearnerSerializer < ActiveModel::Serializer
    resources :id, :name 
end
