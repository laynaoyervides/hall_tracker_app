class AddOutOfClassToActivities < ActiveRecord::Migration[7.0]
  def change
    add_column :activities, :out_of_class, :boolean, default:false
  end
end
