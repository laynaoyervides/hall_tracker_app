class AddTimeOutToActivities < ActiveRecord::Migration[7.0]
  def change
    add_column :activities, :time_out, :integer
  end

end
