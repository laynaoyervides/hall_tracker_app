class AddLearnerIdToActivities < ActiveRecord::Migration[7.0]
  def change
    add_column :activities, :learner_id, :integer
  end
end
