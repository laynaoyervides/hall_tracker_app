class FixTypeInActivities < ActiveRecord::Migration[7.0]
  def change
    rename_column :activities, :type, :reason
  end
end
