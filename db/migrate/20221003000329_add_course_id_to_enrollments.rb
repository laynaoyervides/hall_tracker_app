class AddCourseIdToEnrollments < ActiveRecord::Migration[7.0]
  def change
    add_column :enrollments, :course_id, :integer
  end
end
