class AddTimeInToActivities < ActiveRecord::Migration[7.0]
  def change
    add_column :activities, :time_in, :datetime
  end
end
