class AddNameToLearners < ActiveRecord::Migration[7.0]
  def change
    add_column :learners, :name, :string
  end
end
