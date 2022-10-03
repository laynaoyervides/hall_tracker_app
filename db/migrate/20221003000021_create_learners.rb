class CreateLearners < ActiveRecord::Migration[7.0]
  def change
    create_table :learners do |t|

      t.timestamps
    end
  end
end
