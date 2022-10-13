class RemoveNameFromInstructors < ActiveRecord::Migration[7.0]
  def change
    remove_column :instructors, :name, :string
  end
end
