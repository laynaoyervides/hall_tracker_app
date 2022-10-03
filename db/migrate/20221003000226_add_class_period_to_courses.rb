class AddClassPeriodToCourses < ActiveRecord::Migration[7.0]
  def change
    add_column :courses, :class_period, :intger
  end
end
