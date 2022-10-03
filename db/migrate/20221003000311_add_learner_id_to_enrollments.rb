class AddLearnerIdToEnrollments < ActiveRecord::Migration[7.0]
  def change
    add_column :enrollments, :learner_id, :integer
  end
end
