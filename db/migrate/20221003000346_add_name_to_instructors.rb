class AddNameToInstructors < ActiveRecord::Migration[7.0]
  def change
    add_column :instructors, :name, :string
  end
end
