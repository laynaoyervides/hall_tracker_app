class AddTypeToActivities < ActiveRecord::Migration[7.0]
  def change
    add_column :activities, :type, :string
  end
end
