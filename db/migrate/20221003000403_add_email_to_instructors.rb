class AddEmailToInstructors < ActiveRecord::Migration[7.0]
  def change
    add_column :instructors, :email, :string
  end
end
