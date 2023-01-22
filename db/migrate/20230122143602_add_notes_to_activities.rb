class AddNotesToActivities < ActiveRecord::Migration[7.0]
  def change
    add_column :activities, :notes, :string
  end
end
