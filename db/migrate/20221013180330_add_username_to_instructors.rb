class AddUsernameToInstructors < ActiveRecord::Migration[7.0]
  def change
    add_column :instructors, :username, :string
  end
end
